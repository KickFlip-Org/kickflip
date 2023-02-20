import { Module } from "@nestjs/common"
import { RoleModule } from "../role/role.module"
import { UserController } from "./user.controller"
import { UserMapper } from "./user.mapper"
import { UserService } from "./user.service"

@Module({
    imports: [RoleModule],
    controllers: [UserController],
    providers: [UserService, UserMapper],
    exports: [UserService, UserMapper],
})
export class UserModule {}
