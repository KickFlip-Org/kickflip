import {
    IsNumber,
    IsString,
    IsUUID,
    MinLength,
} from "class-validator"
import type { UserDto } from "./user.dto"

export class UserAddressDto {
    @IsUUID(4)
    public id!: string

    @MinLength(1)
    public userId!: UserDto

    @IsString()
    @MinLength(1)
    public address!: string

    @IsString()
    @MinLength(1)
    public city!: string

    @IsNumber()
    public postalCode!: number

    @IsString()
    @MinLength(1)
    public country!: string
}

export class CreateUserAddressDto {
    @MinLength(1)
    public userId!: UserDto

    @IsString()
    @MinLength(1)
    public address!: string

    @IsString()
    @MinLength(1)
    public city!: string

    @IsNumber()
    public postalCode!: number

    @IsString()
    @MinLength(1)
    public country!: string
}

export class UpdateUserAddressDto {
    @IsUUID(4)
    public id!: string

    @MinLength(1)
    public userId!: UserDto

    @IsString()
    @MinLength(1)
    public address!: string

    @IsString()
    @MinLength(1)
    public city!: string

    @IsNumber()
    public postalCode!: number

    @IsString()
    @MinLength(1)
    public country!: string
}
