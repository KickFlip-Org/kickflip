import { Controller, Request, Post, UseGuards, Get, Body } from "@nestjs/common"
import { UserService } from "../user/user.service"
import { JwtAuthGuard } from "./guards/jwt-auth.guard"
import { LocalAuthGuard } from "./guards/local-auth.guard"
import { AuthService } from "./services/auth.service"
import type { Payload } from "../../dto/payload"
import { CreateUserDto, type UserDto } from "../../dto/user.dto"

@Controller("auth")
export class AuthController {
    private readonly authService: AuthService

    private readonly userService: UserService

    public constructor(authService: AuthService, userService: UserService) {
        this.authService = authService
        this.userService = userService
    }

    @UseGuards(LocalAuthGuard)
    @Post("/login")
    public login(@Request() req: { user: UserDto }) {
        return this.authService.login(req.user)
    }

    @Post("/register")
    public async register(@Body() user: CreateUserDto): Promise<UserDto> {
        return await this.userService.create(user)
    }

    @UseGuards(JwtAuthGuard)
    @Get("/me")
    public async getUser(@Request() req: { user: Payload }): Promise<UserDto> {
        return await this.userService.get(req.user.sub)
    }
}
