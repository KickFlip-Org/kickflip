import { Controller, Get } from "@nestjs/common"

@Controller("user")
export class UserController {
    @Get()
    public findAll(): string {
        return "Coucou"
    }
}
