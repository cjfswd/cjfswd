import Link from "next/link"
import { siteConfig } from "@/config/site"
import ContactModal from "@/components/contact-modal"

export function SiteFooter() {
  return (
    <footer className="border-t py-3 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-12 md:flex-row">
        <div className="flex flex-col gap-2 text-center text-sm leading-loose text-muted-foreground ml:flex-row ml:gap-4 md:text-left">
          <div className="flex flex-col gap-2 ml:flex-row">
            <div>desenvolvido por <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
              prefetch={false}
            >
              cjfswd
            </Link></div>
            <div className="hidden ml:block">-</div>
            <ContactModal><span className="cursor-pointer font-medium underline underline-offset-4">entrar em contato</span></ContactModal>
          </div>
        </div>
      </div>
    </footer>
  )
}