import { Test, TestingModule } from '@nestjs/testing';
import { AccountImplRespositoryService } from './account-impl-respository.service';

describe('AccountImplRespositoryService', () => {
  let service: AccountImplRespositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountImplRespositoryService],
    }).compile();

    service = module.get<AccountImplRespositoryService>(
      AccountImplRespositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
