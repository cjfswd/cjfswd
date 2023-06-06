import "@/styles/globals.css"

import { Metadata } from "next"
import GoBack from "@/components/go-back"
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

export default function CategoryLayout({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
    return (<>
        <section className="blog grid items-center pb-8 pl-2 pt-6 sm:container m:px-3 ml:px-4 md:py-10">
            <GoBack />
            <div className="max-w-[840px]">
                {children}
            </div>
        </section>
    </>)
}
