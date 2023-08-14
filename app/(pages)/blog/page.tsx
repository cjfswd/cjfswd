import Link from "next/link"

import { posts } from "@/config/blog"

export default function AllCategoriesBlog() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {posts.map((item, index) => <Link key={index} href={item.path} className="text-lg font-medium underline">{item.title}</Link>)}
    </section>
  )
}
