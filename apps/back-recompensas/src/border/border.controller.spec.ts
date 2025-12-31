import { Test, TestingModule } from '@nestjs/testing';
import { BorderController } from './border.controller';

describe('BorderController', () => {
  let controller: BorderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BorderController],
    }).compile();

    controller = module.get<BorderController>(BorderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
