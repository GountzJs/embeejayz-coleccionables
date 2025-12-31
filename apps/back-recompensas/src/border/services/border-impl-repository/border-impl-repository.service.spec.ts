import { Test, TestingModule } from '@nestjs/testing';
import { BorderImplRepositoryService } from './border-impl-repository.service';

describe('BorderImplRepositoryService', () => {
  let service: BorderImplRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorderImplRepositoryService],
    }).compile();

    service = module.get<BorderImplRepositoryService>(
      BorderImplRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
