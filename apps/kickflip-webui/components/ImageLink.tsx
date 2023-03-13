// eslint-disable-next-line @typescript-eslint/no-shadow
import Image from "next/image"

// eslint-disable-next-line import/no-default-export
export default interface ImageLinkProperties {
    to: string
    path: string
    alt: string
    width: number
    height: number
}

export function ImageLink({
    to,
    path,
    alt,
    width,
    height,
}: ImageLinkProperties) {
    return (
        <a href={to}>
            <Image
                className="icon"
                src={path}
                alt={alt}
                width={width}
                height={height}
            />
        </a>
    )
}
