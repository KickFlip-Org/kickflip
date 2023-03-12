import { createContext, type ReactNode, useMemo } from "react"
import { useLocalStorage } from "usehooks-ts"
import { setAuthToken } from "../queries/axios-auth-token"
import { useRouter } from "next/router"
import { UserProvider } from "./UserProvider"

interface AuthContext {
    setToken: (value: string) => void
    disconnect: () => void
}

export const authContext = createContext<AuthContext>(
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    undefined as unknown as AuthContext
)

export interface AuthProviderProperties {
    children: ReactNode
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export function AuthProvider({ children }: AuthProviderProperties) {
    const router = useRouter()
    const loginRoutes = ["/login", "/register"]
    const [token, setToken] = useLocalStorage<string | undefined>(
        "token",
        undefined
    )
    setAuthToken(token)
    const value = useMemo(
        () => ({
            setToken,

            disconnect: () => {
                setToken(undefined)
            },
        }),
        [setToken]
    )

    if (typeof window !== "undefined") {
        if (!(token ?? "") && !loginRoutes.includes(router.pathname)) {
            void router.push("/login")
            return null
        }
        if ((token ?? "") && router.pathname === "/login") {
            void router.push("/profile")
            return null
        }
    }
    return (
        <authContext.Provider value={value}>
            {router.pathname === "/login" || router.pathname === "/register" ? (
                children
            ) : (
                <UserProvider>{children}</UserProvider>
            )}
        </authContext.Provider>
    )
}
