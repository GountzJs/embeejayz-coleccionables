import { Test, TestingModule } from '@nestjs/testing';
import { AccountBorderImplRepositoryService } from './account-border-impl-repository.service';

describe('AccountBorderImplRepositoryService', () => {
  let service: AccountBorderImplRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountBorderImplRepositoryService],
    }).compile();

    service = module.get<AccountBorderImplRepositoryService>(
      AccountBorderImplRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
