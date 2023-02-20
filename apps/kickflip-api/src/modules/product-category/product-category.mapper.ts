import type { EntityManager } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"
import type { CreateProductCategoryDto, ProductCategoryDto, UpdateProductCategoryDto } from "../../dto/product-category.dto"
import { ProductCategoryEntity } from "./product-category.entity"

@Injectable()
export class ProductCategoryMapper {
    public createDtoToEntity(dto: CreateProductCategoryDto): ProductCategoryEntity {
        return new ProductCategoryEntity({
            name: dto.name,
        })
    }

    public async entityToDto(
        entity: ProductCategoryEntity,
    ): Promise<ProductCategoryDto> {

        return {
            id: entity.id,
            name: entity.name,
        }
    }

    public async updateDtoToEntity(
        id: string,
        dto: UpdateProductCategoryDto,
        em: EntityManager
    ): Promise<ProductCategoryEntity> {
        const entity = await em.getRepository(ProductCategoryEntity).findOneOrFail(id)

        return em.assign(entity, {
            name: dto.name,
        })
    }
}
