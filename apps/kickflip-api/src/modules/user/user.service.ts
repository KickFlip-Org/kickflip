import { type FilterQuery, MikroORM } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"

import { UserEntity } from "./user.entity"
import type { CreateUserDto, UpdateUserDto, UserDto } from "../../dto/user.dto"
import { UserMapper } from "./user.mapper"
import type { ListResult } from "../../utils/list-result-with-swagger-lib.dto"

@Injectable()
export class UserService {
    private readonly orm: MikroORM

    private readonly mapper: UserMapper

    public constructor(orm: MikroORM, mapper: UserMapper) {
        this.orm = orm
        this.mapper = mapper
    }

    public async list(): Promise<ListResult<UserDto>> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(UserEntity)
        const items = await repository.findAll()
        const total = await repository.count()
        const itemsDto = []
        for await (const item of items) {
            const itemDto = await this.mapper.entityToDto(item, em)
            itemsDto.push(itemDto)
        }
        return {
            data: itemsDto,
            total,
        }
    }

    public async get(filter: FilterQuery<UserEntity>): Promise<UserDto> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(UserEntity)
        const item = await repository.findOneOrFail(filter)
        return await this.mapper.entityToDto(item, em)
    }

    public async create(parameters: CreateUserDto): Promise<UserDto> {
        const em = this.orm.em.fork()
<<<<<<< HEAD
        const item = this.mapper.createDtoToEntity(parameters, em)
=======
        const item = await this.mapper.createDtoToEntity(parameters, em)
>>>>>>> 02c046b41f967c072e8cee849643963dab17eb88
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
