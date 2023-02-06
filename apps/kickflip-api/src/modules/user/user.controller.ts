import { Controller, Get } from "@nestjs/common"

@Controller("user")
export class UserController {
    @Get()
    public findAll(): string {
        console.log("coucou xavier ça fonctionne, d'ailleurs hier j'ai breezi")
        return "This action returns all cats"
    }
}
