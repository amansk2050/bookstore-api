import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [BooksModule,UsersModule,AuthModule,OrdersModule],
  providers: [],
  exports: [],
})
export class AppModule {}
