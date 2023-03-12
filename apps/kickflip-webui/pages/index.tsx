import { useContext } from "react"
import { userContext } from "../context/UserProvider"
import { authContext } from "../context/AuthProvider"
import { Title } from "../components/Title"

// eslint-disable-next-line import/no-default-export
export default function Index() {
    const { user } = useContext(userContext)
    const { disconnect } = useContext(authContext)
    return (
        <>
            <Title content="KickFlip" />
            <p>
                Hello {user.firstName} {user.lastName}
            </p>
            <button className="button" onClick={disconnect}>
                Logout
            </button>
        </>
    )
}
