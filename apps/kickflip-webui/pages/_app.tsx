import type { AppProps } from "next/app"
import Head from "next/head"
import "../public/css/main.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "../context/AuthProvider"
import { Navbar } from "../components/Navbar"

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
                    <meta property="og:title" content="KickFlip" key="title" />
                    <link
                        rel="shortcut icon"
                        href="/img/logo_round_white.png"
                    />
                </Head>
                <header className="header">
                    <Navbar
                        leftIcons={[
                            {
                                to: "/",
                                path: "/svg/categories.svg",
                                alt: "Categories icon",
                                height: 32,
                                width: 32,
                            },
                        ]}
                        rightIcons={[
                            {
                                to: "/",
                                path: "/svg/shop.svg",
                                alt: "Shop icon",
                                height: 32,
                                width: 32,
                            },
                            {
                                to: "/profile",
                                path: "/svg/profile.svg",
                                alt: "Profile icon",
                                height: 32,
                                width: 32,
                            },
                        ]}
                    />
                </header>
                <main className="app">
                    <Component {...pageProps} />
                </main>
                <footer className="footer"></footer>
            </AuthProvider>
        </QueryClientProvider>
    )
}
