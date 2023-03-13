import { useContext } from "react"
import { userContext } from "../context/UserProvider"
import { Link } from "../components/Link"
// eslint-disable-next-line @typescript-eslint/no-shadow
import Image from "next/image"

// eslint-disable-next-line import/no-default-export
export default function Index() {
    const { user } = useContext(userContext)
    return (
        <div className="main">
            <Image
                src="/svg/logo_long_black.svg"
                alt="Logo KickFlip"
                width={200}
                height={200}
            />
            <p>
                Hello{" "}
                <b>
                    {user.firstName} {user.lastName}
                </b>
            </p>
            <Link to="/profile" text="Profile" />
        </div>
    )
}
