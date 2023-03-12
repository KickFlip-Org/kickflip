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
                    <label htmlFor="username">Username*</label>
                    <input
                        {...register("userName", { required: true })}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="GOSSETJohn"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="firstname">Firstname*</label>
                    <input
                        {...register("firstName", { required: true })}
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="lastname">Lastname*</label>
                    <input
                        {...register("lastName", { required: true })}
                        type="text"
                        id="lastname"
                        name="lastname"
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
                        placeholder="g65serdg51vsed651vgds651vds6"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Password*</label>
                    <input
                        {...register("passwordConfirm", { required: true })}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*******************"
                        required
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
                    id="submit"
                    value="Register"
                />
            </div>
        </form>
    )
}
