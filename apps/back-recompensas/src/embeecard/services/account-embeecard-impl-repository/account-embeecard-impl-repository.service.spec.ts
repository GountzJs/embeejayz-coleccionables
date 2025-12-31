import { Test, TestingModule } from '@nestjs/testing';
import { AccountEmbeecardImplRepositoryService } from './account-embeecard-impl-repository.service';

describe('AccountEmbeecardImplRepositoryService', () => {
  let service: AccountEmbeecardImplRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountEmbeecardImplRepositoryService],
    }).compile();

    service = module.get<AccountEmbeecardImplRepositoryService>(
      AccountEmbeecardImplRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
