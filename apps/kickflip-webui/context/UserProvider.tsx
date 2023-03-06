import type { UserDto } from "../../kickflip-api/src/dto/user.dto"
import { type ReactNode, createContext } from "react"
import { useRouter } from "next/router"
import { GetMe } from "../queries/auth-queries"
import { useQuery } from "@tanstack/react-query"

interface UserContext {
    user: UserDto
}

export interface UserProviderProperties {
    children: ReactNode
}

export const userContext = createContext<UserContext>({
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    user: {} as unknown as UserDto,
})

export function UserProvider({ children }: UserProviderProperties) {
    const router = useRouter()
    if (
        router.pathname === "/login" &&
        process.env.NODE_ENV === "development"
    ) {
        throw new Error(
            "ImplementationError: UserProvider should not be used on unidentified routes."
        )
    }
    const userQuery = useQuery(["user"], async () => {
        const user = await GetMe()
        return { user }
    })
    if (userQuery.isLoading) {
        return null
    }
    if (userQuery.isError) {
        return null
    }
    return (
        <userContext.Provider value={userQuery.data}>
            {children}
        </userContext.Provider>
    )
}
