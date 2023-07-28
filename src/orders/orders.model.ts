import { Prisma } from "@prisma/client";


export class Order implements Prisma.OrderCreateInput {
    id: number;
    bookId: number;
    userId:number;
    book: Prisma.BookCreateNestedOneWithoutOrderInput;
    user: Prisma.UsersCreateNestedOneWithoutOrderInput;
}