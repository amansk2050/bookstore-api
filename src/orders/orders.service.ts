import { PrismaService } from "src/prisma.service";
import { Order } from "./orders.model";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) { }

  async getAllOrders() {
    return this.prisma.order.findMany();
  }

  async createOrder(userId: number, bookId: number) {
    try {

      const userData = await this.getPoints(userId);
      if (userData.points > 0) {
        return this.prisma.order.create({
          data: {
            userId,
            bookId,
          },
        });
      } else {
        return { "message": "No points available to buy books" }
      }

    } catch (errr) {
      throw new NotFoundException();
    }

  }

  async cancelOrder(id: number,bookId:number) {
    return this.prisma.order.delete({
      where: {bookId },
    });
  }

  async getPoints(userID: number) {
    return this.prisma.users.findUnique({
      where: {
        id: userID,
      }
    })
  }
}
