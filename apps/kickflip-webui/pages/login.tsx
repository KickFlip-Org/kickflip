import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext, useState } from "react"
import { UserLogin } from "../queries/auth-queries"
import { LoginForm } from "../components/LoginForm"
import { authContext } from "../context/AuthProvider"
import router from "next/router"
import { Title } from "../components/Title"
import { Link } from "../components/Link"

// eslint-disable-next-line import/no-default-export
export default function Login() {
    const { setToken } = useContext(authContext)
    const [errorMessage, setErrorMessage] = useState("")
    const queryClient = useQueryClient()
    const loginMutation = useMutation(UserLogin, {
        onSuccess: async (data) => {
            void queryClient.invalidateQueries(["login"])
            setToken(data.accessToken)
            await router.push("/")
        },

        onError: (error: Error) => {
            setErrorMessage(error.message)
        },
    })
    const handleLogin = loginMutation.mutate
    return (
        <div className="card">
            <Title content="Login" />
            <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
            <div className="links">
                <Link to="/register" text="I don't have an account" />
            </div>
        </div>
    )
}
