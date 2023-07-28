import { Test, TestingModule } from '@nestjs/testing';
import { NewsfetcherService } from './newsfetcher.service';

describe('NewsfetcherService', () => {
  let service: NewsfetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsfetcherService],
    }).compile();

    service = module.get<NewsfetcherService>(NewsfetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
