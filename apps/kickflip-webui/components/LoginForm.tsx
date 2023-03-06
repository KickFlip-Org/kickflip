import { useForm } from "react-hook-form"
import type { UserLoginDto } from "../../kickflip-api/src/dto/user.dto"

interface LoginFormProperties {
    onSubmit: (data: UserLoginDto) => void
    errorMessage: string
}

export function LoginForm({ onSubmit, errorMessage }: LoginFormProperties) {
    const { register, handleSubmit, formState } = useForm<UserLoginDto>()
    const { errors } = formState

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("userName", { required: true })}
                defaultValue="test"
            />

            <input
                {...register("passwordConfirm", { required: true })}
                type="password"
            />
            {errors.userName && <span>Username is required</span>}
            {errors.passwordConfirm && <span>Username is required</span>}
            {errorMessage && <span>{errorMessage}</span>}

            <input type="submit" />
        </form>
    )
}
