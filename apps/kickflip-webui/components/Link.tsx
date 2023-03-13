interface LinkProperties {
    to: string
    text: string
}

export function Link({ to, text }: LinkProperties) {
    return (
        <a className="link" href={to}>
            <span>{text}</span>
        </a>
    )
}
