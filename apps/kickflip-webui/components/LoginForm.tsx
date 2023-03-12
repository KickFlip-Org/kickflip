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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-fields">
                <input
                    {...register("userName", { required: true })}
                    placeholder="Login"
                />

                <input
                    {...register("passwordConfirm", { required: true })}
                    type="password"
                    placeholder="Password"
                />
            </div>
            {errors.userName && <span>Username is required</span>}
            {errors.passwordConfirm && <span>Username is required</span>}
            {errorMessage && <span>{errorMessage}</span>}
            <div className="form-validate">
                <input
                    className="button"
                    type="submit"
                    id="submit"
                    value="Login"
                />
            </div>
        </form>
    )
}
