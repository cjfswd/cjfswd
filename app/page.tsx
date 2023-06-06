/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link"

import Image from "next/image"
import ImageModal from "@/components/image-modal"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown';
import { Icons } from "@/components/icons"
import Port from '@/public/port.png'
import Iphone from '@/public/iPhone.png'
import Test from '@/app/img/test.png'
import Tool from '@/app/img/tool.png'
import Database from '@/app/img/database.png'

export default async function IndexPage() {
  return (
    <section className="grid items-center gap-6 px-4 pb-8 pt-6 sm:container md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-4xl m:text-4.5xl ml:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Castillo Junior</span> <br />
          Fullstack Web Developer.
        </h1>
        <p className="max-w-[700px] text-base text-muted-foreground sm:text-xl">
          Olá! Meu nome é Castillo Junior, sou um desenvolvedor de software, moro no Rio de Janeiro, adoro tecnologia e gosto de trabalhar em projetos desafiadores nos quais posso aplicar minha expertise de maneira inovadora.
        </p>
      </div>
      <div className="flex w-fit flex-col flex-wrap justify-start gap-3 text-xl font-bold ml:flex-row ml:gap-x-4 ml:gap-y-3 sm:gap-6 sm:text-2xl [&>*]:flex [&>*]:cursor-pointer [&>*]:items-center [&>*]:gap-1">
        <Link className="flex" href='https://cjfswd.vercel.app/curriculo_antonio_carlos_del_castillo_junior.pdf' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.paperclip />currículo
        </Link>
        <Link className="flex" href='https://github.com/cjfswd/' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.gitHub className="w-[24px]" />github
        </Link>
        <Link className="flex" href='https://cjfswd.vercel.app/template_contrato.pdf' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.scroll />contrato
        </Link>
      </div>
      <div className="mt-4 max-w-[700px] text-lg">
        <h2 className="mb-1 text-lg font-semibold leading-6">tecnologias favoritas...</h2>
        <ReactMarkdown unwrapDisallowed={true} disallowedElements={['p']} className=" flex flex-wrap gap-2 dark:invert [&>img]:h-6 ml:[&>img]:h-[1.65rem]" >
          ![node](https://img.shields.io/badge/-node-000000?logo=node.js&logoColor=white)
          ![react](https://img.shields.io/badge/-react-000000?logo=react&logoColor=white)
          ![typescript](https://img.shields.io/badge/-typescript-000000?logo=typescript&logoColor=white)
          ![tailwind](https://img.shields.io/badge/-tailwind-000000?logo=tailwind-css&logoColor=white)
          ![neo4j](https://img.shields.io/badge/-neo4j-000000?logo=Neo4j&logoColor=white)
          ![postgreSQL](https://img.shields.io/badge/-postgreSQL-000000?logo=postgreSQL&logoColor=white)
          ![mongoDB](https://img.shields.io/badge/-mongoDB-000000?logo=mongoDB&logoColor=white)
          ![redis](https://img.shields.io/badge/-redis-000000?logo=redis&logoColor=white)
          ![jest](https://img.shields.io/badge/-jest-000000?logo=jest&logoColor=white)
          ![playwright](https://img.shields.io/badge/-playwright-000000?logo=playwright&logoColor=white)
          ![next](https://img.shields.io/badge/-next-000000?logo=next.js&logoColor=white)
          ![vercel](https://img.shields.io/badge/-vercel-000000?logo=vercel&logoColor=white)
        </ReactMarkdown>
        <p className="mt-1 text-xs text-muted-foreground">não me limito somente a essas tecnologias e linguagens listadas.</p>
      </div>
      <div className="mt-12 max-w-[1000px] ">
        <h2 className="mb-6 text-4xl font-extrabold">Projetos</h2>
        <div className="grid grid-cols-1 gap-6 sm:w-[90%] sm:grid-cols-2 sm:gap-12 lg:gap-24 xl:gap-28">
          <div className="flex flex-col">
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Port} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={Port} fill={true} alt={"wtf"} sizes="" className="cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p>Site institucional da empresa <Link href='http://equipededicar.com' target="_blank" prefetch={false} className="underline">Dedicar Equipe</Link>, expõe informações gerais da firma.</p>
          </div>
          <div className="flex flex-col">
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Iphone} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={Iphone} fill={true} alt={"wtf"} sizes="" className="cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p className="whitespace-normal"><Link href='https://github.com/dedicar-team/core' target="_blank" prefetch={false} className="underline">Sistema Web administrativo</Link>, no momento permite consultas e cadastro de funcionários.</p>
          </div>
        </div>
      </div>
      <Button className="w-fit" disabled={true}>ver todos projetos | disponível em breve</Button>
      <div className="mt-12 max-w-[600px] ">
        <h2 className="mb-4 text-4xl font-extrabold sm:mb-8">Artigos</h2>
        <div className="grid grid-cols-1 divide-y-2 [&>a]:py-6">
          <Link href={'/blog/test/porque-devemos-testar-os-codigos-que-produzimos-como-desenvolvedor-de-software'} className="inline-block">
            <Image src={Test} width={512} height={512} alt={"wtf"} className="float-right ml-3 inline-block w-[95px] rounded object-contain" />
            <h3 className="font-semibold ml:text-xl sm:text-2xl">Porque devemos testar os códigos que produzimos como desenvolvedor de software</h3>
          </Link>
          <Link href={'/blog/tool/ferramentas-comuns-no-desenvolvimento-de-software'} className="inline-block">
            <Image src={Tool} width={512} height={512} alt={"wtf"} className="float-right ml-3 inline-block w-[95px] rounded object-contain" />
            <h3 className="font-semibold ml:text-xl sm:text-2xl">Ferramentas comuns no desenvolvimento de software.</h3>
          </Link>
          <Link href={'/blog/database/quando-usar-sql-nosql-e-grafos'} className="inline-block">
            <Image src={Database} width={512} height={512} alt={"wtf"} className="float-right ml-3 inline-block w-[95px] rounded object-contain" />
            <h3 className="font-semibold ml:text-xl sm:text-2xl">Quando usar databases SQL, NoSQL e Grafos.</h3>
          </Link>
        </div>
      </div>
      <Link href={'/blog'} className="w-fit"><Button className="w-fit ">ver todos artigos</Button></Link>
    </section>
  )
}
