import { type FilterQuery, MikroORM } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"

import { UserEntity } from "./user.entity"
import type { CreateUserDto, UpdateUserDto, UserDto } from "../../dto/user.dto"
import { UserMapper } from "./user.mapper"

@Injectable()
export class UserService {
    private readonly orm: MikroORM

    private readonly mapper: UserMapper

    public constructor(orm: MikroORM, mapper: UserMapper) {
        this.orm = orm
        this.mapper = mapper
    }

    public async get(filter: FilterQuery<UserEntity>): Promise<UserDto> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(UserEntity)
        const item = await repository.findOneOrFail(filter)
        return await this.mapper.entityToDto(item, em)
    }

    public async create(parameters: CreateUserDto): Promise<UserDto> {
        const em = this.orm.em.fork()
        const item = this.mapper.createDtoToEntity(parameters)
        await em.persistAndFlush(item)
        return await this.mapper.entityToDto(item, em)
    }

    public async update(
        id: string,
        parameters: UpdateUserDto
    ): Promise<UserDto> {
        const em = this.orm.em.fork()
        const item = await this.mapper.updateDtoToEntity(id, parameters, em)
        await em.persistAndFlush(item)
        return await this.mapper.entityToDto(item, em)
    }

    public async delete(id: string): Promise<void> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(UserEntity)
        const item = await repository.findOneOrFail(id)

        await repository.removeAndFlush(item)
    }
}
