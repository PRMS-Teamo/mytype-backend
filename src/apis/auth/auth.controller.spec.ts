import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

const kakaoLoginReqData = {
  method: 'GET',
  url: '/auth/kakao/callback?code=abc123',
  query: {
    code: 'abc123',
  },
  user: {
    kakaoId: '4280655950',
    username: '한지웅',
    displayName: '한지웅',
    status: 'DONE',
  },
  session: {}, // 필요시 세션 관련
  logIn: jest.fn((user, cb) => cb()), // Passport가 사용
};

describe("AuthController", () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
