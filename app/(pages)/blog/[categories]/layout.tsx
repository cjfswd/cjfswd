import "@/styles/globals.css"

import { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
    return (<>
        {children}
    </>)
}
