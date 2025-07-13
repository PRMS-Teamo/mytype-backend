import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import { ContentType } from "@/apis/shared/types/content.type";

export interface FileUploadInfo {
  key: string;
  url: string;
  presignedUrl: string;
  expiresIn: number;
  contentType: ContentType;
}

@Injectable()
export class S3Service {
  private readonly logger = new Logger(S3Service.name);
  private readonly s3Client: S3Client;
  private readonly bucketName: string;
  private readonly region: string;

  constructor(private readonly configService: ConfigService) {
    this.bucketName =
      this.configService.get<string>("AWS_S3_BUCKET_NAME") || "";
    this.region = this.configService.get<string>(
      "AWS_REGION",
      "ap-northeast-2",
    );

    const accessKeyId = this.configService.get<string>("AWS_ACCESS_KEY_ID");
    const secretAccessKey = this.configService.get<string>(
      "AWS_SECRET_ACCESS_KEY",
    );

    if (!accessKeyId || !secretAccessKey || !this.bucketName) {
      this.logger.warn(
        "AWS S3 credentials not configured. File upload will not work.",
      );
    }

    this.s3Client = new S3Client({
      region: this.region,
      credentials: {
        accessKeyId: accessKeyId || "",
        secretAccessKey: secretAccessKey || "",
      },
    });
  }

  /**
   * 파일 업로드를 위한 Presigned URL을 생성합니다.
   * @param fileName 원본 파일명
   * @param contentType 파일 타입
   * @param folder 저장할 폴더 (선택사항)
   * @returns 파일 업로드 정보
   */
  async generatePresignedUrl(
    userId: string,
    fileName: string,
    contentType: ContentType,
    folder?: string,
  ): Promise<FileUploadInfo> {
    const fileExtension = fileName.split(".").pop();
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;
    const key = folder
      ? `${folder}/${userId}/${uniqueFileName}`
      : `${userId}/${uniqueFileName}`;

    const expiresIn = 3600; // 1시간

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      ContentType: `image/${fileExtension}`,
    });

    const presignedUrl = await getSignedUrl(this.s3Client, command, {
      expiresIn,
    });
    const url = `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${key}`;

    this.logger.log(`Generated presigned URL for file: ${key}`);

    return {
      key,
      url,
      presignedUrl,
      expiresIn,
      contentType: fileExtension as ContentType,
    };
  }

  /**
   * S3에서 파일을 삭제합니다.
   * @param key 파일 키
   */
  async deleteFile(key: string): Promise<void> {
    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await this.s3Client.send(command);
      this.logger.log(`Deleted file from S3: ${key}`);
    } catch (error) {
      this.logger.error(`Failed to delete file from S3: ${key}`, error);
      throw error;
    }
  }

  /**
   * 파일 키로부터 S3 URL을 생성합니다.
   * @param key 파일 키
   * @returns S3 URL
   */
  getFileUrl(key: string): string {
    return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${key}`;
  }
}
