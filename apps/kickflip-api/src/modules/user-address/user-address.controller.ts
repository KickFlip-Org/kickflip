import { Controller, Get } from "@nestjs/common"

@Controller("user-address")
export class UserAddressController {
    @Get()
    public findAll(): string {
        return "Coucou"
    }
}
