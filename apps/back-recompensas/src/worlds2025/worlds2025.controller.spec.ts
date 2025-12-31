import { Test, TestingModule } from '@nestjs/testing';
import { Worlds2025Controller } from './worlds2025.controller';

describe('Worlds2025Controller', () => {
  let controller: Worlds2025Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Worlds2025Controller],
    }).compile();

    controller = module.get<Worlds2025Controller>(Worlds2025Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
