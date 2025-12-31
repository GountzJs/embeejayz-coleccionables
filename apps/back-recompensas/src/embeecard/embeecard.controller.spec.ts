import { Test, TestingModule } from '@nestjs/testing';
import { EmbeecardController } from './embeecard.controller';

describe('EmbeecardController', () => {
  let controller: EmbeecardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbeecardController],
    }).compile();

    controller = module.get<EmbeecardController>(EmbeecardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
