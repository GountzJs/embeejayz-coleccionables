import { Test, TestingModule } from '@nestjs/testing';
import { AccountStickerImplRepositoryService } from './account-sticker-impl-repository.service';

describe('AccountStickerImplRepositoryService', () => {
  let service: AccountStickerImplRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountStickerImplRepositoryService],
    }).compile();

    service = module.get<AccountStickerImplRepositoryService>(
      AccountStickerImplRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
