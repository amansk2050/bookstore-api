import { ExecutionContext, UnauthorizedException } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"


export class JwtAuthGuard extends AuthGuard('jwt') {

     canActivate(context: ExecutionContext) {
          const request = context.switchToHttp().getRequest();
          console.log("context ", request.user)
          return super.canActivate(context)
     }

     handleRequest(err, user, info) {
          console.log("yes request")
          console.log("yes user", user)


          if (err || !user) {
               throw err || new UnauthorizedException();
          }
          return user
     }
}

