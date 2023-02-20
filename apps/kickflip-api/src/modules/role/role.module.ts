import { Module } from "@nestjs/common"
import { RoleController } from "./role.controller"
import { RoleMapper } from "./role.mapper"
import { RoleService } from "./role.service"

@Module({
    controllers: [RoleController],
    providers: [RoleMapper, RoleService],
    exports: [RoleService, RoleMapper],
})
export class RoleModule {}
