import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsfetcherDto } from './create-newsfetcher.dto';

export class UpdateNewsfetcherDto extends PartialType(CreateNewsfetcherDto) {}
