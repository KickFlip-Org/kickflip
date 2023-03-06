import { useForm } from "react-hook-form"
import type { CreateUserDto } from "../../kickflip-api/src/dto/user.dto"

interface RegisterFormProperties {
    onSubmit: (data: CreateUserDto) => void
    errorMessage: string
}

export function RegisterForm({
    onSubmit,
    errorMessage,
}: RegisterFormProperties) {
    const { register, handleSubmit, formState } = useForm<CreateUserDto>()
    const { errors } = formState

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("userName", { required: true })} />
            <input {...register("firstName", { required: true })} />
            <input {...register("lastName", { required: true })} />
            <input {...register("phone", { required: true })} />
            <input {...register("email", { required: true })} />
            <input {...register("role", { required: true })} />
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
