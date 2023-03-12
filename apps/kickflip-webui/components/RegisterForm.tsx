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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-fields">
                <div className="field">
                    <label htmlFor="userName">Username*</label>
                    <input
                        {...register("userName", { required: true })}
                        type="text"
                        id="userName"
                        name="userName"
                        placeholder="GOSSETJohn"
                    />
                </div>
                <div className="field">
                    <label htmlFor="firstName">Firstname*</label>
                    <input
                        {...register("firstName", { required: true })}
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="lastName">Lastname*</label>
                    <input
                        {...register("lastName", { required: true })}
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="GOSSET"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                        {...register("phone", { required: true })}
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="XX XX XX XX XX"
                    />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="louis.gosset@gmail.com"
                    />
                </div>
                <div className="field">
                    <label htmlFor="role">Role*</label>
                    <input
                        {...register("role", { required: true })}
                        type="text"
                        id="role"
                        name="role"
                        placeholder="d2c80fb1-a687-4db6-93e4-d048d4ee8a6b"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="passwordConfirm">Password*</label>
                    <input
                        {...register("passwordConfirm", { required: true })}
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="*******************"
                    />
                </div>
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
                    id="register"
                    value="Register"
                />
            </div>
        </form>
    )
}
