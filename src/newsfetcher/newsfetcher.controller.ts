import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsfetcherService } from './newsfetcher.service';
import { CreateNewsfetcherDto } from './dto/create-newsfetcher.dto';
import { UpdateNewsfetcherDto } from './dto/update-newsfetcher.dto';

@Controller('newsfetcher')
export class NewsfetcherController {
  constructor(private readonly newsfetcherService: NewsfetcherService) {}

  @Get()
  async getNews(): Promise<any> {
    return this.newsfetcherService.getNewsData();
  }

  @Post()
  create(@Body() createNewsfetcherDto: CreateNewsfetcherDto) {
    return this.newsfetcherService.create(createNewsfetcherDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNewsfetcherDto: UpdateNewsfetcherDto,
  ) {
    return this.newsfetcherService.update(+id, updateNewsfetcherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsfetcherService.remove(+id);
  }
}
