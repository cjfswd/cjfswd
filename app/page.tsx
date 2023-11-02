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
import fs from 'fs';
import React from "react";
import { TreeNode, removeNodesWithEmptyChildren, removeFilesWithSameNameAsDirectory, buildTree, filterTreeNodesByExtension, listArchives, removePathsFromTree } from "@/lib/blog";

const obsidianLinkRegex = /\[\[([^\]]+?)(?:\|([^\]]+?))?\]\]/g;

interface BreadcrumbProps {
  node: TreeNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ node }) => {
  if (!node) {
    return null;
  }

  const breadcrumbs: any[] = [];

  function buildBreadcrumbs(node: TreeNode) {
    if (node) {
      breadcrumbs.push(node);
      if (node.children && node.children.length > 0) {
        buildBreadcrumbs(node.children[0]);
      }
    }
  }

  buildBreadcrumbs(node);

  return (<div>
    {breadcrumbs.map((crumb, index) => (
      <span key={index}>
        {index > 0 && ' / '}
        {crumb.name}
      </span>
    ))}
  </div>);
};

// Recursive function to get files
function getFiles(dir: string, files: string[] = []) {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir);
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files);
    } else {
      // If it is a file, push the full path to the files array
      files.push(name);
    }
  }
  return files;
}

export default async function IndexPage() {
  const files = getFiles(process.env.NODE_ENV == 'development' ? '/obsidian/cjfswd/obsidian' : process.cwd() + '/obsidian').filter(file => file.includes('.md'))

  return (
    <section className="grid items-center gap-6 px-4 pb-8 pt-6 sm:container md:py-10" suppressHydrationWarning>
      {/* <pre>{JSON.stringify(files, null, 2)}</pre> */}
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-4xl m:text-4.5xl ml:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Castillo Junior</span><br />
          Fullstack Web Developer.
        </h1>
        <p className="max-w-[700px] text-base text-muted-foreground sm:text-xl">
          Olá! você me chamar de CJ, sou um desenvolvedor de software, adoro tecnologia e gosto de trabalhar em projetos desafiadores nos quais posso aplicar minha expertise de maneira inovadora.
        </p>
      </div>
      <div className="flex w-fit flex-col flex-wrap justify-start gap-3 text-xl font-bold ml:flex-row ml:gap-x-4 ml:gap-y-3 sm:gap-6 sm:text-2xl [&>*]:flex [&>*]:cursor-pointer [&>*]:items-center [&>*]:gap-1">
        <Link className="flex" href='/curriculo_antonio_carlos_del_castillo_junior.pdf' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.paperclip />currículo
        </Link>
        <Link className="flex" href='https://github.com/cjfswd/' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.gitHub className="w-[24px]" />github
        </Link>
        {/* <Link className="flex" href='https://github.com/cjfswd/' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Image src={'/youtube.svg'} width={24} height={24} alt="youtube icon" />youtube
        </Link> */}
        {/* <Link className="flex" href='https://cjfswd.vercel.app/template_contrato.pdf' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.scroll />contrato
        </Link> */}
      </div>
      <div className="mt-4 max-w-[700px] text-lg">
        <h2 className="mb-1 text-lg font-semibold leading-6">minhas tecnologias favoritas...</h2>
        <div className="flex w-full flex-wrap gap-2 text-lg">
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/nodedotjs.svg'} width={20} height={20} alt={"node icon"} style={{ filter: "invert(48%) sepia(71%) saturate(449%) hue-rotate(71deg) brightness(88%) contrast(94%)" }} />
            node
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/typescript.svg'} width={20} height={20} alt={"typescript icon"} style={{ filter: "invert(41%) sepia(50%) saturate(711%) hue-rotate(170deg) brightness(95%) contrast(95%)" }} />
            typescript
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/tailwindcss.svg'} width={20} height={20} alt={"tailwind icon"} style={{ filter: "invert(80%) sepia(41%) saturate(7435%) hue-rotate(146deg) brightness(92%) contrast(95%)" }} />
            tailwind
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/neo4j.svg'} width={20} height={20} alt={"neo4j icon"} style={{ filter: "invert(49%) sepia(29%) saturate(943%) hue-rotate(171deg) brightness(90%) contrast(93%)" }} />
            neo4j
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/postgresql.svg'} width={20} height={20} alt={"node icon"} style={{ filter: "invert(44%) sepia(68%) saturate(5631%) hue-rotate(217deg) brightness(96%) contrast(83%)" }} />
            postgreSQL
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/mongodb.svg'} width={20} height={20} alt={"mongodb icon"} style={{ filter: "invert(50%) sepia(67%) saturate(382%) hue-rotate(72deg) brightness(94%) contrast(95%)" }} />
            mongoDB
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/redis.svg'} width={20} height={20} alt={"node icon"} style={{ filter: "invert(28%) sepia(85%) saturate(2318%) hue-rotate(345deg) brightness(89%) contrast(93%)" }} />
            redis
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2  py-1 leading-none text-white">
            <Image src={'/jest.svg'} width={20} height={20} alt={"jest icon"} style={{ filter: "invert(13%) sepia(71%) saturate(4530%) hue-rotate(344deg) brightness(97%) contrast(99%)" }} />
            jest
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/playwright.svg'} width={20} height={20} alt={"playwright icon"} style={{ filter: "invert(49%) sepia(80%) saturate(478%) hue-rotate(73deg) brightness(95%) contrast(87%)" }} />
            playwright
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/nextdotjs.svg'} width={20} height={20} alt={"nextjs icon"} style={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(47deg) brightness(105%) contrast(102%)" }} />
            next
          </p>
          <p className="flex w-fit gap-2 rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 leading-none text-white">
            <Image src={'/vercel.svg'} width={20} height={20} alt={"vercel icon"} style={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(47deg) brightness(105%) contrast(102%)" }} />
            vercel
          </p>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">não me limito somente a essas tecnologias e linguagens listadas.</p>
      </div>
      <div className="mt-4 max-w-[700px] text-lg">
        <h2 className="mb-1 text-lg font-semibold leading-6">minhas melhores skills...</h2>
        <div className="flex w-full flex-wrap gap-2">
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            layout responsivo
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            programação
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            modelagem de banco de dados
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            API Restfull
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            gateway de pagamentos
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            testes
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            versionamento
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            aplicação de página única SPA
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            sistema CMS
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            sistema MVC
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            implantação
          </p>
          <p className="w-fit rounded border bg-gradient-to-t from-black from-20% to-[#0F0F0F] to-80% px-2 py-1 text-[15px] leading-none text-white">
            documentação
          </p>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">estas são apenas as habilidades nas quais tenho maior domínio.</p>
      </div>
      {/* <div className="mt-12 max-w-[1000px] ">
        <h2 className="mb-4 text-2xl font-extrabold m:text-3xl ml:text-4xl sm:mb-8">Projetos</h2>
        <div className="grid grid-cols-1 gap-6 sm:w-[90%] sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-4">
            <span className="text-xl font-extrabold">Site Institucional</span>
            <div className="relative aspect-square w-full ml:w-3/4 sm:w-full">
              <ImageModal imgLink={Port} aspect="aspect-square">
                <div className="relative aspect-square w-full" style={{ position: 'relative' }}><Image src={Port} fill={true} alt={"wtf"} sizes="" className="absolute cursor-pointer rounded object-contain" /></div>
              </ImageModal>
            </div>
            <p>Site institucional da empresa <Link href='http://equipededicar.com' target="_blank" prefetch={false} className="underline">Dedicar Equipe</Link>, expõe informações gerais da firma.</p>
            <div className="mt-3 flex flex-row gap-2">
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/dedicar-team/site"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
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
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/dedicar-team/core"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
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
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/gallery-ps4"}
                target="_blank"
                referrerPolicy="no-referrer"
              ><Icons.gitHub className="h-[16px] w-[16px]" />código</Link>
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
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
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/api-correios"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"/blog/development/desenvolvendo-e-publicando-uma-api-na-vercel"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.newspaper className="h-[16px] w-[16px]" />blogpost
              </Link>
            </div>
          </div> */}
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
      {/* <div className="flex flex-col rounded-lg border p-4">
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
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/cjfswd"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
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
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
                href={"https://github.com/cjfswd/cjfswd"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />código
              </Link>
              <Link
                className={cn(badgeVariants({ variant: "secondary" }), "flex w-fit flex-row gap-1 rounded-xl py-1")}
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
      <Link href={'https://github.com/cjfswd?tab=repositories'} target={"_blank"} referrerPolicy={"no-referrer"} className={cn(buttonVariants({ variant: "default" }), 'w-fit dark:font-semibold')}>ver outros projetos no github</Link> */}
      {/* <div className="mt-12 max-w-[600px] ">
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
      <Link href={'/blog'} className={cn(buttonVariants({ variant: "default" }), 'w-fit dark:font-semibold')}>ver todos artigos</Link> */}
    </section>
  )
}
