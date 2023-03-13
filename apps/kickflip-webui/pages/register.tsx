import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UserSignup } from "../queries/auth-queries"
import { useRouter } from "next/router"
import { RegisterForm } from "../components/RegisterForm"
import { Title } from "../components/Title"
import { Link } from "../components/Link"

// eslint-disable-next-line import/no-default-export
export default function SignUp() {
    const queryClient = useQueryClient()
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState("")
    const signupMutation = useMutation(UserSignup, {
        onSuccess: async () => {
            void queryClient.invalidateQueries(["signup"])
            await router.push("/login")
        },

        onError: (error: Error) => {
            setErrorMessage(error.message)
        },
    })
    const handleSignup = signupMutation.mutate
    return (
        <div className="card">
            <Title content="Register" />
            <RegisterForm onSubmit={handleSignup} errorMessage={errorMessage} />
            <div className="links">
                <Link to="/login" text="I already have an account" />
            </div>
        </div>
    )
}
