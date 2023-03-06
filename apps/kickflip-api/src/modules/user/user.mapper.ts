import type { EntityManager } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"
import { genSalt, hash } from "bcrypt"
import type { CreateUserDto, UpdateUserDto, UserDto } from "../../dto/user.dto"
import { RoleEntity } from "../role/role.entity"
import { RoleMapper } from "../role/role.mapper"

import { UserEntity } from "./user.entity"

@Injectable()
export class UserMapper {
    private readonly roleMapper: RoleMapper

    public constructor(roleMapper: RoleMapper) {
        this.roleMapper = roleMapper
    }

    public async createDtoToEntity(
        dto: CreateUserDto,
        em: EntityManager
    ): Promise<UserEntity> {
        const salt = await genSalt()
        const hashedPassword = await hash(dto.passwordConfirm, salt)
        const role = await em.getRepository(RoleEntity).findOneOrFail(dto.role)
        return new UserEntity({
            firstName: dto.firstName,
            lastName: dto.lastName,
            userName: dto.userName,
            createdAt: new Date(),
            email: dto.email,
            hashedPassword,
            role,
            phone: dto.phone,
        })
    }

    public async entityToDto(
        entity: UserEntity,
        em: EntityManager
    ): Promise<UserDto> {
        await em.populate(entity, ["role"])
        const role = this.roleMapper.entityToDto(entity.role)

        return {
            id: entity.id,
            firstName: entity.firstName,
            lastName: entity.lastName,
            createdAt: new Date(entity.createdAt).toISOString(),
            email: entity.email,
            userName: entity.userName,
            phone: entity.phone,
            credits: entity.credits,
            passwordConfirm: entity.hashedPassword,
            role,
        }
    }

    public async updateDtoToEntity(
        id: string,
        dto: UpdateUserDto,
        em: EntityManager
    ): Promise<UserEntity> {
        const entity = await em.getRepository(UserEntity).findOneOrFail(id)

        return em.assign(entity, {
            firstName: dto.firstName,
            lastName: dto.lastName,
            createdAt: new Date(dto.createdAt),
            email: dto.email,
        })
    }
}
