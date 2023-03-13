import type ImageLinkProperties from "./ImageLink"
import { ImageLink } from "./ImageLink"

interface NavbarProperties {
    leftIcons: ImageLinkProperties[]
    rightIcons: ImageLinkProperties[]
}

export function Navbar({ leftIcons, rightIcons }: NavbarProperties) {
    return (
        <nav className="navbar">
            <div className="icons">
                {leftIcons.map((icon, index) => (
                    <ImageLink
                        key={index}
                        to={icon.to}
                        alt={icon.alt}
                        path={icon.path}
                        height={25}
                        width={25}
                    />
                ))}
            </div>
            <ImageLink
                to="/"
                alt="Logo KickFlip"
                path="/svg/logo_long_black.svg"
                height={35}
                width={120}
            />
            <div className="icons">
                {rightIcons.map((icon, index) => (
                    <ImageLink
                        key={index}
                        to={icon.to}
                        alt={icon.alt}
                        path={icon.path}
                        height={25}
                        width={25}
                    />
                ))}
            </div>
        </nav>
    )
}
