import { IsArray, IsString, IsUUID } from "class-validator"

export class RoleDto {
    @IsUUID()
    public id!: string

    @IsString()
    public name: string

    @IsArray()
    public permission: string[]
}

export class CreateRoleDto {
    @IsString()
    public name: string

    @IsArray()
    public permission: string[]
}
