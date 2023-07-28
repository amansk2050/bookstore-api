import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { OrdersModule } from './orders/orders.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [BooksModule,UsersModule,AuthModule,OrdersModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'secretKey',
      }),
    }),],
  providers: [],
  exports: [],
})
export class AppModule {}
