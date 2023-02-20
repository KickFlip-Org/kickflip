import { Injectable } from "@nestjs/common"
import { UserService } from "../../user/user.service"
import { compare } from "bcrypt"
import { JwtService } from "@nestjs/jwt"
import { jwtConstants } from "../constant"
// eslint-disable-next-line import/extensions
import type { UserDto } from "apps/kickflip-api/src/dto/user.dto"
import type { Payload } from "apps/kickflip-api/src/dto/payload"

@Injectable()
export class AuthService {
    private readonly userService: UserService

    private readonly jwtService: JwtService

    public constructor(userService: UserService, jwtService: JwtService) {
        this.userService = userService
        this.jwtService = jwtService
    }

    public login(userDto: UserDto) {
        const payload: Payload = {
            sub: userDto.id,
        }
        return {
            accessToken: this.jwtService.sign(payload, {
                secret: jwtConstants.secret,
            }),
        }
    }

    public async validateUser(
        userName: string,
        password: string
    ): Promise<UserDto | null> {
        const user = await this.userService.get({ userName })
        const isMatch = await compare(password, user.passwordConfirm)
        if (isMatch) {
            return user
        }

        // eslint-disable-next-line unicorn/no-null
        return null
    }
}
