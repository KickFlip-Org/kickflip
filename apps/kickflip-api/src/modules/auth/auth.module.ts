import { Module } from "@nestjs/common"
import { AuthService } from "./services/auth.service"
import { LocalStrategy } from "./strategies/local.strategy"
import { UserModule } from "../user/user.module"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { jwtConstants } from "./constant"
import { JwtStrategy } from "./strategies/jwt.strategy"
import { AuthController } from "./auth.controller"

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
        }),
    ],

    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
