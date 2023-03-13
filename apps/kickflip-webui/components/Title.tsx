interface TitleProperties {
    content: string
}

export function Title({ content }: TitleProperties) {
    return <h1 className="title">{content}</h1>
}
