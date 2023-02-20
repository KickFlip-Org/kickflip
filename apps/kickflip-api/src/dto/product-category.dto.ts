import {
    IsString,
    IsUUID,
    MinLength,
} from "class-validator"

export class ProductCategoryDto {
    @IsUUID(4)
    public id!: string

    @IsString()
    @MinLength(1)
    public name!: string
}

export class CreateProductCategoryDto {
    @IsString()
    @MinLength(1)
    public name!: string
}

export class UpdateProductCategoryDto {
    @IsUUID(4)
    public id!: string

    @IsString()
    @MinLength(1)
    public name!: string
}
