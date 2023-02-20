import type { EntityManager } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"
import { genSalt, hash } from "bcrypt"
import type { CreateUserDto, UpdateUserDto, UserDto } from "../../dto/user.dto"

import { UserEntity } from "./user.entity"

@Injectable()
export class UserMapper {
    public async createDtoToEntity(dto: CreateUserDto): Promise<UserEntity> {
        const salt = await genSalt()
        const hashedPassword = await hash(dto.passwordConfirm, salt)
        return new UserEntity({
            firstName: dto.firstName,
            lastName: dto.lastName,
            userName: dto.userName,
            createdAt: new Date(),
            email: dto.email,
            hashedPassword,
        })
    }

    public async entityToDto(
        entity: UserEntity,
        em: EntityManager
    ): Promise<UserDto> {
        await em.populate(entity, ["role"])

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
