import { Test, TestingModule } from '@nestjs/testing';
import { NewsfetcherController } from './newsfetcher.controller';
import { NewsfetcherService } from './newsfetcher.service';

describe('NewsfetcherController', () => {
  let controller: NewsfetcherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsfetcherController],
      providers: [NewsfetcherService],
    }).compile();

    controller = module.get<NewsfetcherController>(NewsfetcherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
