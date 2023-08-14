import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const categories = ['development']

export default async function Page() {
    return (<>
        <h1>Desenvolvendo e publicando uma API na Vercel</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>Ao empreender na criação de sistemas tecnológicos, me deparei com o desafio de desenvolver um servidor proxy. Esse servidor se conecta aos serviços dos Correios por meio de uma <Link href='https://github.com/cjfswd/api-correios' target="_blank" referrerPolicy="no-referrer"><code>API REST</code></Link>, com o propósito de fornecer informações de consulta sobre fretes e assuntos relacionados a outro sistema de e-commerce as escolhas não funcionais para este projeto foram usar o framework <Link href={'https://github.com/vercel/next.js'} target="_blank" referrerPolicy="no-referrer"><code>Next.js</code></Link>, a library <Link href={'https://github.com/colinhacks/zod'} target="_blank" referrerPolicy="no-referrer"><code>Zod</code></Link> e a infra da <Link href={'https://vercel.com/'} target="_blank" referrerPolicy="no-referrer"><code>Vercel</code></Link>, neste post eu irei falar um pouco como foi o processo de desenvolvimento dessa API.</p>
        <h2>Desenvolvimento a API REST com code Next.js, Zod e Vercel</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/rest-api.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>Trabalhar com Next.js e Zod para desenvolver APIs REST é surpreendentemente simples e eficaz. O framework Next.js oferece uma estrutura intuitiva que facilita a criação de APIs com rotas claras e gerenciamento de requisições. Além disso, a integração perfeita do Next.js com a plataforma Vercel torna o deploy e escalabilidade relativamente simples. A biblioteca Zod, por sua vez, simplifica a validação de dados, garantindo que apenas informações válidas alcancem a API. A combinação dessas tecnologias sem dúvidas agilizaram o desenvolvimento da API a sinergia entre essas tecnologias proporcionaram um ambiente ágil e eficiente, tornando-as uma escolha técnica e financeira vantajosa para projetos de pequena escala.</p>
        <h2>Lidando com Arquivos de Cache com a library frete</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/vercel-server.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>Entretanto o projeto começou com um obstáculo importante. A biblioteca <code>frete</code> dependia de arquivos de cache (<code>.xml</code> e <code>.json</code>), mas o ambiente serverless da Vercel não permitia esse acesso devido a falta de um file system entre as lambda functions. A solução foi realizar um fork da biblioteca no GitHub e modificar o código por conta própria, assim trazendo a mudança funcional necessitada: a substituição dos arquivos de cache por variáveis em memória. Essa modificação não apenas resolveu o problema, como também otimizou o desempenho.</p>
        <h2>Próximos Passos - Integração e Entrega Contínua (CI/CD) e Testes</h2>
        <p>O futuro apresenta desafios. A implementação do padrão RESTful na API é um próximo passo, para trazer mais organização. Além disso, a ausência de testes e de integração contínua e entrega (CI/CD) é uma lacuna identificada. A solução está no uso do Jest para testes e na configuração do GitHub Actions para integração contínua e entrega automatizada, visando a estabilidade do sistema.</p>
        <h2>Conclusão</h2>
        <p>A criação desse sistema serverless, que engloba tanto a API quanto o proxy dos Correios, se revelou uma jornada desafiadora. Enfrentar obstáculos e encontrar soluções faz parte inerente do processo de desenvolvimento de software. Olhando adiante, é crucial avançar com a implementação do padrão RESTful e fortalecer os testes e o fluxo de integração contínua e entrega contínua (CI/CD). Enquanto direciono o projeto para uma futura integração em um e-commerce, fica claro que a evolução é constante, e a busca por aprendizado contínuo impulsiona esse progresso de forma vigorosa.</p>
        <h3 className="underline"><Link href='https://github.com/cjfswd/api-correios' target="_blank" referrerPolicy="no-referrer">link do projeto no github</Link></h3>
    </>)
}