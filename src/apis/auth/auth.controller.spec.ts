import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

describe("AuthController", () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useClass: AuthService, // 진짜 AuthService 사용
        },
        {
          provide: JwtService, // sign 한 값이 'mockToken' 이 되도록 임의 설정
          useValue: {
            sign: jest.fn(() => "mockToken"),
            verify: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(() => "mockSecret"),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it("Module Mocking 성공", () => {
    expect(controller).toBeDefined();
  });

  it("카카오 로그인 실행", () => {
    const mockUser = {
      kakaoId: "12341234",
      username: "test",
      displayName: "test",
      status: "NEW",
    };

    const mockReq = {
      user: mockUser,
    } as any;

    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as any;

    console.log(mockReq);

    controller.kakaoCallback(mockReq, mockRes);
    const returnValue = mockRes.json.mock.calls[0][0];
    expect(returnValue).toEqual({
      ...mockUser,
      tokens: {
        accessToken: "mockToken",
        refreshToken: "mockToken",
      },
    });
    console.log(returnValue);
  });
});
