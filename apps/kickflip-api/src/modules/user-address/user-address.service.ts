import { type FilterQuery, MikroORM } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"
import type {
    CreateUserAddressDto,
    UpdateUserAddressDto,
    UserAddressDto,
} from "../../dto/user-address.dto"
import { UserAddressEntity } from "./user-address.entity"
import { UserAddressMapper } from "./user-address.mapper"

@Injectable()
export class UserAddressService {
    private readonly orm: MikroORM

    private readonly mapper: UserAddressMapper

    public constructor(orm: MikroORM, mapper: UserAddressMapper) {
        this.orm = orm
        this.mapper = mapper
    }

    public async get(
        filter: FilterQuery<UserAddressEntity>
    ): Promise<UserAddressDto> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(UserAddressEntity)
        const item = await repository.findOneOrFail(filter)
        return await this.mapper.entityToDto(item, em)
    }

    public async create(
        parameters: CreateUserAddressDto
    ): Promise<UserAddressDto> {
        const em = this.orm.em.fork()
        const item = this.mapper.createDtoToEntity(parameters, em)
        await em.persistAndFlush(item)
        return await this.mapper.entityToDto(await item, em)
    }

    public async update(
        id: string,
        parameters: UpdateUserAddressDto
    ): Promise<UserAddressDto> {
        const em = this.orm.em.fork()
        const item = await this.mapper.updateDtoToEntity(id, parameters, em)
        await em.persistAndFlush(item)
        return await this.mapper.entityToDto(item, em)
    }

    public async delete(id: string): Promise<void> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(UserAddressEntity)
        const item = await repository.findOneOrFail(id)

        await repository.removeAndFlush(item)
    }
}
