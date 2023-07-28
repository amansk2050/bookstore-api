import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Book } from "./book.model";
import { BooksService } from "./books.service";
import { Request, Response } from "express";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
     async getAllBook(@Req() request:Request, @Res() response:Response ):Promise<any>{
          const result =  await this.bookService.getAllBook()
          return response.status(200).json({
               status: "Ok!",
               message: "Successfully fetch data!",
               result: result 
          })
     }

     @Post()
     async postBook(@Body() postData: Book):Promise<Book>{
          return this.bookService.createBook(postData)
     }

     @Get(':id')
     async getBook(@Param('id') id:number):Promise<Book | null>{
          return this.bookService.getBook(id)
     }

}
