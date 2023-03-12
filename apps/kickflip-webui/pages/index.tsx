import { useContext } from "react"
import { userContext } from "../context/UserProvider"
import { Title } from "../components/Title"
import { Link } from "../components/Link"

// eslint-disable-next-line import/no-default-export
export default function Index() {
    const { user } = useContext(userContext)
    return (
        <>
            <Title content="KickFlip" />
            <p>
                Hello {user.firstName} {user.lastName}
            </p>
            <Link to="/profile" text="Profile" />
        </>
    )
}
