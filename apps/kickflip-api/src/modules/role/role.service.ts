import { type FilterQuery, MikroORM } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"

import type { CreateRoleDto, RoleDto } from "../../dto/role.dto"
import { RoleEntity } from "./role.entity"
import { RoleMapper } from "./role.mapper"

@Injectable()
export class RoleService {
    private readonly orm: MikroORM

    private readonly mapper: RoleMapper

    public constructor(orm: MikroORM, mapper: RoleMapper) {
        this.orm = orm
        this.mapper = mapper
    }

    public async get(filter: FilterQuery<RoleEntity>): Promise<RoleDto> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(RoleEntity)
        const item = await repository.findOneOrFail(filter)
        return this.mapper.entityToDto(item)
    }

    public async create(parameters: CreateRoleDto): Promise<RoleDto> {
        const em = this.orm.em.fork()
        const item = this.mapper.createDtoToEntity(parameters)
        await em.persistAndFlush(item)
        return this.mapper.entityToDto(item)
    }

    public async update(
        id: string,
        parameters: CreateRoleDto
    ): Promise<RoleDto> {
        const em = this.orm.em.fork()
        const item = await this.mapper.updateDtoToEntity(id, parameters, em)
        await em.persistAndFlush(item)
        return this.mapper.entityToDto(item)
    }

    public async delete(id: string): Promise<void> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(RoleEntity)
        const item = await repository.findOneOrFail(id)

        await repository.removeAndFlush(item)
    }
}
