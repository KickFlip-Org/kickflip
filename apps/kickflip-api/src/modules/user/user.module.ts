import { Module } from "@nestjs/common"
import { RoleModule } from "../role/role.module"
import { UserController } from "./user.controller"
import { UserMapper } from "./user.mapper"
import { UserService } from "./user.service"

@Module({
    imports: [RoleModule],
    controllers: [UserController],
    providers: [UserService, UserMapper],
<<<<<<< HEAD
    exports: [UserService, UserMapper]
=======
    exports: [UserService, UserMapper],
>>>>>>> 02c046b41f967c072e8cee849643963dab17eb88
})
export class UserModule {}
