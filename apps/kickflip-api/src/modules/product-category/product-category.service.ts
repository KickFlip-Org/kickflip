import { type FilterQuery, MikroORM } from "@mikro-orm/core"
import { Injectable } from "@nestjs/common"

import type { ProductCategoryMapper } from "./product-category.mapper"
import { ProductCategoryEntity } from "./product-category.entity"
import type { CreateProductCategoryDto, ProductCategoryDto, UpdateProductCategoryDto } from "../../dto/product-category.dto"

@Injectable()
export class ProductCategoryService {
    private readonly orm: MikroORM

    private readonly mapper: ProductCategoryMapper

    public constructor(orm: MikroORM, mapper: ProductCategoryMapper) {
        this.orm = orm
        this.mapper = mapper
    }

    public async get(filter: FilterQuery<ProductCategoryEntity>): Promise<ProductCategoryDto> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(ProductCategoryEntity)
        const item = await repository.findOneOrFail(filter)
        return await this.mapper.entityToDto(item)
    }

    public async create(parameters: CreateProductCategoryDto): Promise<ProductCategoryDto> {
        const em = this.orm.em.fork()
        const item = this.mapper.createDtoToEntity(parameters)
        await em.persistAndFlush(item)
        return await this.mapper.entityToDto(item)
    }

    public async update(
        id: string,
        parameters: UpdateProductCategoryDto
    ): Promise<ProductCategoryDto> {
        const em = this.orm.em.fork()
        const item = await this.mapper.updateDtoToEntity(id, parameters, em)
        await em.persistAndFlush(item)
        return await this.mapper.entityToDto(item)
    }

    public async delete(id: string): Promise<void> {
        const em = this.orm.em.fork()
        const repository = em.getRepository(ProductCategoryEntity)
        const item = await repository.findOneOrFail(id)

        await repository.removeAndFlush(item)
    }
}
