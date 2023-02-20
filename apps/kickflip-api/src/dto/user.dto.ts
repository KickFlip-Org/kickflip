import {
    IsEmail,
    IsISO8601,
    IsString,
    IsUUID,
    MinLength,
} from "class-validator"

export class UserDto {
    @IsUUID(4)
    public id!: string

    @IsString()
    @MinLength(1)
    public userName!: string

    @IsString()
    @MinLength(1)
    public firstName!: string

    @IsString()
    @MinLength(1)
    public lastName!: string

    public phone!: string

    @IsISO8601({ strict: true })
    public createdAt: string

    public credits: number

    @IsEmail()
    public email!: string
}

export class CreateUserDto {
    @IsUUID(4)
    public id!: string

    @IsString()
    @MinLength(1)
    public userName!: string

    @IsString()
    @MinLength(1)
    public firstName!: string

    @IsString()
    @MinLength(1)
    public lastName!: string

    public phone!: string

    @IsISO8601({ strict: true })
    public createdAt: string

    public credits: number

    @IsEmail()
    public email!: string
}

export class UpdateUserDto {
    @IsUUID(4)
    public id!: string

    @IsString()
    @MinLength(1)
    public userName!: string

    @IsString()
    @MinLength(1)
    public firstName!: string

    @IsString()
    @MinLength(1)
    public lastName!: string

    public phone!: string

    @IsISO8601({ strict: true })
    public createdAt: string

    public credits: number

    @IsEmail()
    public email!: string
}
