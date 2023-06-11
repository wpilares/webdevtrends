import { Module } from '@nestjs/common';
import { NewsfetcherService } from './newsfetcher.service';
import { NewsfetcherController } from './newsfetcher.controller';

@Module({
  controllers: [NewsfetcherController],
  providers: [NewsfetcherService],
})
export class NewsfetcherModule {}
