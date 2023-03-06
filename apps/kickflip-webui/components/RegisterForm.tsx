import { useForm } from "react-hook-form"
import type { CreateUserDto } from "../../kickflip-api/src/dto/user.dto"

interface RegisterFormProperties {
    onSubmit: (data: CreateUserDto) => void
}

export function RegisterForm({ onSubmit }: RegisterFormProperties) {
    const { register, handleSubmit, formState } = useForm<CreateUserDto>()
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

            <input type="submit" />
        </form>
    )
}
