import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
import { corsConfig } from "./infrastructure/config/cors.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정 적용
  app.enableCors(corsConfig());

  // 쿠키 파서 미들웨어 추가 (Express 내장 기능 사용)
  app.use(cookieParser());

  // swagger
  const config = new DocumentBuilder()
    .setTitle("MyType API")
    .setDescription("MyType API 입니다.")
    .setVersion("1.0")
    .addTag("my-type")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
