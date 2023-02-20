import type { EntityManager } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"
import type { CreateUserDto, UpdateUserDto, UserDto } from "../../dto/user.dto"

import { UserEntity } from "./user.entity"

@Injectable()
export class UserMapper {
    public createDtoToEntity(dto: CreateUserDto): UserEntity {
        return new UserEntity({
            firstName: dto.firstName,
            lastName: dto.lastName,
            userName: dto.userName,
            createdAt: new Date(),
            email: dto.email,
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
