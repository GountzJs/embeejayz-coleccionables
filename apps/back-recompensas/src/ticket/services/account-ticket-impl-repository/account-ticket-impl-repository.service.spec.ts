import { Test, TestingModule } from '@nestjs/testing';
import { AccountTicketImplRepositoryService } from './account-ticket-impl-repository.service';

describe('AccountTicketImplRepositoryService', () => {
  let service: AccountTicketImplRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountTicketImplRepositoryService],
    }).compile();

    service = module.get<AccountTicketImplRepositoryService>(AccountTicketImplRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
