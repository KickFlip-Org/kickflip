import type {
    CreateUserDto,
    UserLoginDto,
    UserDto,
} from "../../kickflip-api/src/dto/user.dto"
import { baseAxios } from "./axios"

export async function UserSignup(dto: CreateUserDto) {
    const query = await baseAxios.post<UserDto>("/auth/register", dto)
    return query.data
}

export async function UserLogin(dto: UserLoginDto) {
    const result = await baseAxios.post<{
        accessToken: string
    }>("/auth/login", dto)
    return result.data
}

export async function GetMe() {
    const result = await baseAxios.get<UserDto>("/auth/me")
    return result.data
}
