import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class DynamicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { provider } = request.params;

    if (!provider) {
      return false;
    }

    return new (AuthGuard(provider))(context).canActivate(context);
  }
}
