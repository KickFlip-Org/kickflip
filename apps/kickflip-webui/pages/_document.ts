// eslint-disable-next-line @typescript-eslint/no-shadow
import Document, {
    type DocumentContext,
    type DocumentInitialProps,
} from "next/document"

// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
    public static override async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx)
    }
}
