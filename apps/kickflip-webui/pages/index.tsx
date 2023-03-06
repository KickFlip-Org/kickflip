import { useContext } from "react"
import { userContext } from "../context/UserProvider"
import { authContext } from "../context/AuthProvider"

// eslint-disable-next-line import/no-default-export
export default function Index() {
    const { user } = useContext(userContext)
    const { disconnect } = useContext(authContext)
    return (
        <>
            <p>Kickflip</p>
            <p>
                Hello {user.firstName} {user.lastName}
            </p>
            <button onClick={disconnect}>Logout</button>
        </>
    )
}
