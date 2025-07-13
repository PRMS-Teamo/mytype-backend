import { Test, TestingModule } from '@nestjs/testing';
import { BumpsService } from './bumps.service';

describe('BumpsService', () => {
  let service: BumpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BumpsService],
    }).compile();

    service = module.get<BumpsService>(BumpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
