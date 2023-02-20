import { Strategy } from "passport-local"
import { PassportStrategy } from "@nestjs/passport"
import { Injectable, UnauthorizedException } from "@nestjs/common"
import { AuthService } from "../services/auth.service"
// eslint-disable-next-line import/extensions
import type { UserDto } from "apps/kickflip-api/src/dto/user.dto"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly authService: AuthService

    public constructor(authService: AuthService) {
        super({
            usernameField: "userName",
            passwordField: "passwordConfirm",
            userIdField: "userId",
        })
        this.authService = authService
    }

    public async validate(
        userName: string,
        password: string
    ): Promise<UserDto> {
        const user = await this.authService.validateUser(userName, password)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}
