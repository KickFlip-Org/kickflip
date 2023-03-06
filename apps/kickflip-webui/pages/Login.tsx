import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { UserLogin } from "../queries/auth-queries"
import { LoginForm } from "../components/LoginForm"

export function Login() {
    const queryClient = useQueryClient()
    const [errorMessage, setErrorMessage] = useState("")
    const loginMutation = useMutation(UserLogin, {
        onSuccess: () => {
            void queryClient.invalidateQueries(["login"])
        },

        onError: (error: Error) => {
            setErrorMessage(error.message)
        },
    })
    const handleLogin = loginMutation.mutate
    return <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
}
