// controllers/order.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Order } from './orders.model';
import { OrdersService } from "./orders.service";
import { Request, Response } from "express";

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get()
  async getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Post()
  async createOrder(@Body() data: { userId: number, bookId: number }) {
    return this.orderService.createOrder(data.userId, data.bookId);
  }

  @Delete(':id')
  async cancelOrder(@Param('id') id: number) {
    return this.orderService.cancelOrder(id);
  }
}
