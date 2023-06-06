export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "cjfswd",
  description:
    "Castillo Junior Fullstack Web Developer.",
  mainNav: [
    {
      title: "Ínicio",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contato",
    },
    // {
    //   title: "Portfólio",
    //   href: "/portfolio",
    // },
    // {
    //   title: "Códigos",
    //   href: "/snippets",
    // },
  ],
  links: {
    github: "https://github.com/cjfswd/",
    docs: "https://ui.shadcn.com",
  },
}
