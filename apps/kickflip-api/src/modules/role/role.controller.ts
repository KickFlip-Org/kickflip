import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { ApiResponse } from "@nestjs/swagger"
import { CreateRoleDto, RoleDto } from "../../dto/role.dto"
import { RoleService } from "./role.service"

@Controller("role")
export class RoleController {
    public roleService: RoleService

    public constructor(roleService: RoleService) {
        this.roleService = roleService
    }

    @Post()
    @ApiResponse({
        status: 201,
        type: RoleDto,
    })
    public async create(@Body() parameters: CreateRoleDto): Promise<RoleDto> {
        return await this.roleService.create(parameters)
    }

    @Get("/:roleId")
    @ApiResponse({
        status: 200,
        type: RoleDto,
    })
    public async find(@Param("roleId") roleId: string): Promise<RoleDto> {
        return await this.roleService.get(roleId)
    }
}
