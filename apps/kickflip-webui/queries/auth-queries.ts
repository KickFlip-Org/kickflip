import type { UserLoginDto } from "../../kickflip-api/src/dto/user.dto"
import { baseAxios } from "./axios"

export async function UserLogin(dto: UserLoginDto) {
    const result = await baseAxios.post<{ accessToken: string }>(
        "/auth/login",
        dto
    )
    return result.data
}
