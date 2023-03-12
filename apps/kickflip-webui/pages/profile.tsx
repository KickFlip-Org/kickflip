import { useContext } from "react"
import { userContext } from "../context/UserProvider"
import { authContext } from "../context/AuthProvider"

// eslint-disable-next-line import/no-default-export
export default function Index() {
    const { user } = useContext(userContext)
    const { disconnect } = useContext(authContext)
    return (
        <div className="card">
            <p>
                <b>Username</b>: {user.userName}
            </p>
            <p>
                <b>Fistname</b>: {user.firstName}
            </p>
            <p>
                <b>Lastname</b>: {user.lastName}
            </p>
            <p>
                <b>Email</b>: {user.email}
            </p>
            <p>
                <b>Phone</b>: {user.phone}
            </p>
            <div className="form-validate">
                <button className="button" onClick={disconnect}>
                    Logout
                </button>
            </div>
        </div>
    )
}
