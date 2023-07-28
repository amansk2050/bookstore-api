import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaService } from "../prisma.service";
import { AuthModule } from "src/authentication/auth.module";



@Module({
     imports:[],
     controllers : [UsersController],
     providers: [UsersService,PrismaService]
})
export class UsersModule{}