// import { ExecutionContext, UnauthorizedException } from "@nestjs/common"
// import { AuthGuard } from "@nestjs/passport"


// export class JwtAuthGuard extends AuthGuard('jwt') {

//      canActivate(context: ExecutionContext) {
//           const request = context.switchToHttp().getRequest();
//           console.log("context ", request)
//           return super.canActivate(context)
//      }

//      handleRequest(err, user, info) {
//           console.log("yes request")
//           console.log("yes user", user)


//           if (err || !user) {
//                throw err || new UnauthorizedException();
//           }
//           return user
//      }
// }


import {
     applyDecorators,
     BadRequestException,
     CanActivate,
     createParamDecorator,
     ExecutionContext,
     HttpException,
     HttpStatus,
     Injectable,
     UseGuards,
   } from '@nestjs/common'
   import * as jwt from 'jsonwebtoken'
   
   @Injectable()
   export class AuthGuard implements CanActivate {
     constructor() {}
     async canActivate(context: ExecutionContext): Promise<boolean> {
       const req = context.switchToHttp().getRequest()
       if (!req.headers.authorization && !(req.query.apiKey && req.query.email && req.query.operatorId)) return false
       req.user = await this.validateToken(req.headers.authorization)
       return true
     }
   
     async validateToken(auth: string) {
       try {
          console.log("aut ", auth);
         if (auth.split(' ')[0] !== 'Bearer') throw new HttpException('Invalid access token', HttpStatus.FORBIDDEN)
         const token = auth.split(' ')[1]
         const decoded: any = jwt.verify(token, "secretKey")
         return decoded
       } catch (error) {
         throw new BadRequestException("not validated");
       }
     }
   }
   
   export function Auth() {
     return applyDecorators(UseGuards(AuthGuard))
   }
   
   export const GetUserID = createParamDecorator((data, req): string => {
     return req.args[0].user.id
   })
   
   

