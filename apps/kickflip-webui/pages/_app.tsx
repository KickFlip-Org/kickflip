import type { AppProps } from "next/app"
import Head from "next/head"
import "./styles.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "../context/AuthProvider"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            staleTime: 30_000,
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        },
    },
})
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/naming-convention, import/no-default-export
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Head>
                    <title>KickFlip</title>
                </Head>
                <main className="app">
                    <Component {...pageProps} />
                </main>
            </AuthProvider>
        </QueryClientProvider>
    )
}
