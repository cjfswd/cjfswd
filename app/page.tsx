/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link"

import Image from "next/image"
import ImageModal from "@/components/image-modal"
import { buttonVariants } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown';
import { Icons } from "@/components/icons"
import Port from '@/public/port.png'
import Iphone from '@/public/iPhone.png'
import Test from '@/app/img/test.png'
import Tool from '@/app/img/tool.png'
import Database from '@/app/img/database.png'
import Correios from '@/app/img/correios.jpg'
import FFMPEG from '@/app/img/ffmpeg.jpg'
import Blog from '@/app/img/blog.png'
import G4K from '@/app/img/4k.png'
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils"

export default async function IndexPage() {
  return (
    <section className="grid items-center gap-6 px-4 pb-8 pt-6 sm:container md:py-10" suppressHydrationWarning>
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
        <ReactMarkdown unwrapDisallowed={true} disallowedElements={['p']} className=" flex flex-wrap gap-2 dark:invert [&>img]:h-6 ml:[&>img]:h-[1.65rem]">
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
      <div className="mt-4 max-w-[700px] text-lg">
        <h2 className="mb-1 text-lg font-semibold leading-6">minhas melhores skills...</h2>
        <ReactMarkdown unwrapDisallowed={true} disallowedElements={['p']} className=" flex flex-wrap gap-2 dark:invert [&>img]:h-6 ml:[&>img]:h-[1.65rem]">
          ![redis](https://img.shields.io/badge/-layout%20responsivo-000000)
          ![node](https://img.shields.io/badge/-programação-000000)
          ![postgreSQL](https://img.shields.io/badge/-modelagem%20de%20banco%20de%20dados-000000)
          ![tailwind](https://img.shields.io/badge/-gateway%20de%20pagamentos-000000)
          ![tailwind](https://img.shields.io/badge/-testes-000000)
          ![mongoDB](https://img.shields.io/badge/-versionamento-000000)
          ![node](https://img.shields.io/badge/-aplicação%20de%20página%20única%20SPA-000000)
          ![react](https://img.shields.io/badge/-api%20RESTFULL-000000)
          ![typescript](https://img.shields.io/badge/-sistema%20de%20gerenciamento%20de%20conteúdo%20CMS-000000)
          ![typescript](https://img.shields.io/badge/-sistema%20MVC-000000)
          ![neo4j](https://img.shields.io/badge/-implantação-000000)
        </ReactMarkdown>
        <p className="mt-1 text-xs text-muted-foreground">estas são apenas as habilidades nas quais tenho maior domínio.</p>
      </div>
      <div className="mt-12 max-w-[1000px] ">
        <h2 className="mb-4 text-2xl font-extrabold m:text-3xl ml:text-4xl sm:mb-8">Projetos</h2>
        <div className="grid grid-cols-1 gap-6 sm:w-[90%] sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold">Site Institucional</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Port} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={Port} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p>Site institucional da empresa <Link href='http://equipededicar.com' target="_blank" prefetch={false} className="underline">Dedicar Equipe</Link>, expõe informações gerais da firma.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/dedicar-team/site"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"/blog/development/desenvolvimento-de-site-institucional-para-empresa-de-home-care-com-foco-em-seo"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.newspaper className="h-[16px] w-[16px]" />blogpost
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold">Sistema Administrativo</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Iphone} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={Iphone} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p className="whitespace-normal">Sistema Web administrativo, no momento permite consultas e cadastro de funcionários.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/dedicar-team/core"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"/blog/development/desenvolvendo-um-sistema-web-administrativo-de-cadastro-de-funcionarios"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.newspaper className="h-[16px] w-[16px]" />blogpost
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold">Portfólio 4K</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={G4K} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={G4K} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p><Link href={'https://gallery-ps4.vercel.app/'} className="underline" target="_blank" referrerPolicy="no-referrer">Portfólio</Link> com objetivo de disponibilizar imagens em alta definição.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/gallery-ps4"}
                target="_blank"
                referrerPolicy="no-referrer"
              ><Icons.gitHub className="h-[16px] w-[16px]" />código</Link>
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"/blog/development/contornando-a-perda-de-qualidade-em-imagens-nas-redes-sociais"}
                target="_blank"
                referrerPolicy="no-referrer"
              ><Icons.newspaper className="h-[16px] w-[16px]" />blogpost</Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold">Correios API</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Correios} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={Correios} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p>proxy e api rest para calcular valores e prazos de serviços do correios nacional brasileiro.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/api-correios"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"/blog/development/desenvolvendo-e-publicando-uma-api-na-vercel"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.newspaper className="h-[16px] w-[16px]" />blogpost
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold"> Imprime A4</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Port} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={Port} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p>serviço comercial eletrônico de impressão via internet com entregas por correios ou uber.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/imprime-A4"}
                target="_blank"
                referrerPolicy="no-referrer"
              ><Icons.gitHub className="h-[16px] w-[16px]" />código</Link>
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={""}
                target="_blank"
                referrerPolicy="no-referrer"
              ><Icons.newspaper className="h-[16px] w-[16px]" />blogpost</Link>
            </div>
          </div> */}
          <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold">Conversor FFMPEG</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={FFMPEG} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={FFMPEG} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p><Link href={'https://convert-ffmpeg.vercel.app/'}
              target="_blank"
              referrerPolicy="no-referrer"
              className="underline"
            >Solução</Link> para conversão de vídeo e áudio diretamente de qualquer browser.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/cjfswd"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"/blog/development/webassembly-um-novo-potencial-disruptivo-no-browser"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.newspaper className="h-[16px] w-[16px]" />blogpost
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold">Blog</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Blog} aspect="aspect-square">
                <div className="relative aspect-square w-full"><Image src={Blog} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p className="whitespace-normal">Meu <Link
              href={"/blog"}
              target="_blank"
              referrerPolicy="no-referrer"
              className="underline"
            >Blog</Link>, em que escrevo sobre desenvolvimento de software e tecnologia.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/cjfswd"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "default" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"/blog/development/como-e-criar-e-escrever-um-blog-de-tecnologia-programacao"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.newspaper className="h-[16px] w-[16px]" />blogpost
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href={'https://github.com/cjfswd?tab=repositories'} target={"_blank"} referrerPolicy={"no-referrer"} className={cn(buttonVariants(), 'w-fit')}>ver outros projetos no github</Link>
      <div className="mt-12 max-w-[600px] ">
        <h2 className="mb-4 text-2xl font-extrabold m:text-3xl ml:text-4xl sm:mb-8">Artigos</h2>
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
      <Link href={'/blog'} className={cn(buttonVariants(), 'w-fit')}  >ver todos artigos</Link>
    </section>
  )
}
