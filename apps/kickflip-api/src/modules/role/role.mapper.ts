import type { EntityManager } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"
import type { CreateRoleDto, RoleDto } from "../../dto/role.dto"
import { RoleEntity } from "./role.entity"

@Injectable()
export class RoleMapper {
    public createDtoToEntity(dto: CreateRoleDto): RoleEntity {
        return new RoleEntity({
            name: dto.name,
            permission: dto.permission,
        })
    }

    public entityToDto(entity: RoleEntity): RoleDto {
        return {
            id: entity.id,
            name: entity.name,
            permission: entity.permission,
        }
    }

    public async updateDtoToEntity(
        id: string,
        dto: CreateRoleDto,
        em: EntityManager
    ): Promise<RoleEntity> {
        const entity = await em.getRepository(RoleEntity).findOneOrFail(id)

        return em.assign(entity, {
            name: dto.name,
            permission: dto.permission,
        })
    }
}
