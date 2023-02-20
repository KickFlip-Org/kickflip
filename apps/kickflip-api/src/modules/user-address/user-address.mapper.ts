import type { EntityManager } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"
import type {
    CreateUserAddressDto,
    UpdateUserAddressDto,
    UserAddressDto,
} from "../../dto/user-address.dto"
import { UserEntity } from "../user/user.entity"
import { UserMapper } from "../user/user.mapper"
import { UserAddressEntity } from "./user-address.entity"

@Injectable()
export class UserAddressMapper {
    private readonly userMapper: UserMapper

    public constructor(userMapper: UserMapper) {
        this.userMapper = userMapper
    }

    public async createDtoToEntity(
        dto: CreateUserAddressDto,
        em: EntityManager
    ): Promise<UserAddressEntity> {
        const user = await em.getRepository(UserEntity).findOneOrFail(dto.user)

        return new UserAddressEntity({
            user,
            address: dto.address,
            city: dto.city,
            postalCode: dto.postalCode,
            country: dto.country,
        })
    }

    public async entityToDto(
        entity: UserAddressEntity,
        em: EntityManager
    ): Promise<UserAddressDto> {
        await em.populate(entity, ["address"])

        const user = await this.userMapper.entityToDto(entity.user, em)

        return {
            id: entity.id,
            user,
            address: entity.address,
            city: entity.city,
            postalCode: entity.postalCode,
            country: entity.country,
        }
    }

    public async updateDtoToEntity(
        id: string,
        dto: UpdateUserAddressDto,
        em: EntityManager
    ): Promise<UserAddressEntity> {
        const entity = await em
            .getRepository(UserAddressEntity)
            .findOneOrFail(id)

        return em.assign(entity, {
            user: dto.user,
            address: dto.address,
            city: dto.city,
            postalCode: dto.postalCode,
            country: dto.country,
        })
    }
}
