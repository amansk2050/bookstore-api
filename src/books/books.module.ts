import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports:[],
  controllers: [BooksController],
  providers: [BooksService,PrismaService]
})
export class BooksModule {}
