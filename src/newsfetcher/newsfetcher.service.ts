import { Injectable } from '@nestjs/common';
import { CreateNewsfetcherDto } from './dto/create-newsfetcher.dto';
import { UpdateNewsfetcherDto } from './dto/update-newsfetcher.dto';
import axios from 'axios';

@Injectable()
export class NewsfetcherService {
  async getNewsData(): Promise<any> {
    try {
      const response = await axios.get(
        'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
      );
      return response.data.hits;
    } catch (error) {
      throw new Error('Cant obtain data from external API');
    }
  }

  create(createNewsfetcherDto: CreateNewsfetcherDto) {
    return 'This action adds a new newsfetcher';
  }

  update(id: number, updateNewsfetcherDto: UpdateNewsfetcherDto) {
    return `This action updates a #${id} newsfetcher`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsfetcher`;
  }
}
