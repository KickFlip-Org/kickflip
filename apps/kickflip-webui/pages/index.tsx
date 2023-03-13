import { useContext } from "react"
import { userContext } from "../context/UserProvider"

// eslint-disable-next-line import/no-default-export
export default function Index() {
    const { user } = useContext(userContext)
    return (
        <div className="main">
            <p>
                Hello{" "}
                <b>
                    {user.firstName} {user.lastName}
                </b>
            </p>
        </div>
    )
}
