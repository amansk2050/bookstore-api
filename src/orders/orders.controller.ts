import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Order } from './orders.model';
import { OrdersService } from "./orders.service";
import { Request, Response } from "express";
import { Auth, GetUserID } from 'src/authentication/auth.gaurd';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) { }

  @Get()
  async getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Post()
  @Auth()
  async createOrder(@GetUserID('id') id: number, @Body() data: { bookId: number }) {
    return this.orderService.createOrder(id, data.bookId);
  }

  @Delete(':id')
  @Auth()
  async cancelOrder(@GetUserID('id') id: number,@Param('id') bookId: number) {
    return this.orderService.cancelOrder(id,bookId);
  }
}
