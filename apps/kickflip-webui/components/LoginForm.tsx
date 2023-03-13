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
                    placeholder="Login*"
                    required
                />
                <input
                    {...register("passwordConfirm", { required: true })}
                    type="password"
                    placeholder="Password*"
                    required
                />
            </div>
            <div className="errors">
                {errors.userName && (
                    <p className="error">Username is required</p>
                )}
                {errors.passwordConfirm && (
                    <p className="error">Password is required</p>
                )}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
            <div className="form-validate">
                <input
                    className="button"
                    type="submit"
                    id="login"
                    value="Login"
                />
            </div>
        </form>
    )
}
