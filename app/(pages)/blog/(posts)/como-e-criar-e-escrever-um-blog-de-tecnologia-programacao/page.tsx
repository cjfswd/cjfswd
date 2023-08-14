import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const categories = ['development']

export default async function Page() {
    return (<>
        <h1>Como é criar e escrever um blog de tecnologia/programação</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>Este artigo descreve de forma objetiva o processo de desenvolvimento de um blog focado em tecnologia, onde a programação e a redação se convergem para criar um ambiente de informação consistente. Detalharemos a implementação utilizando as tecnologias React, Next.js e Tailwind. O projeto, inicialmente concebido como um portfólio pessoal, expandiu sua função para incluir também um blog, transcenderindo sua concepção original de estratégia de marketing pessoal.</p>
        <h2>Iniciando o Conceito</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/blogging.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>O ponto de partida desse projeto era estabelecer um portfólio eficaz para apresentar conquistas e habilidades aos interessados, como clientes em potencial e recrutadores. A seleção das tecnologias React, Next.js e Tailwind foi guiada pela busca de um desenvolvimento ágil e uma aparência contemporânea, aspectos cruciais para causar uma impressão favorável e garantir a usabilidade.</p>
        <h2>A Convergência entre Programação e Escrita</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/blogging-programming-convergence.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>A sinergia entre a programação e a redação desempenha um papel fundamental nesse contexto. A habilidade de programar demanda uma abordagem lógica e analítica na resolução de problemas, enquanto a escrita exige clareza e coesão na comunicação de ideias. Essas duas disciplinas se entrelaçam, enriquecendo tanto o blog quanto o autor. Desde explorar novas estruturas em React até simplificar tópicos técnicos para uma audiência diversificada, a interconexão entre codificação e linguagem escrita se manifesta de maneira tangível.</p>
        <h2>O Caminho do Desenvolvimento</h2>
        <p>Ao longo do processo, o projeto evoluiu. O que era inicialmente um portfólio voltado ao marketing pessoal se transformou em um blog multifacetado, abraçando a dinâmica do compartilhamento regular de insights e informações. Enfrentar o desafio de manter a consistência de publicações diárias revelou-se uma tarefa árdua, exigindo rigor e disciplina. A pesquisa constante tornou-se um pilar, alimentando cada post com conteúdo relevante e atual.</p>
        <h2>Conclusão</h2>
        <p>Nessa jornada, a programação dá vida à plataforma, enquanto as palavras proporcionam a voz para ideias e descobertas. A intersecção entre os domínios técnico e comunicativo resulta em um ambiente que estimula a exploração e o aprendizado, refletindo as nuances em constante evolução do cenário tecnológico.</p>
        <h3 className="underline"><Link href='https://cjfswd.vercel.app/blog/' target="_blank" referrerPolicy="no-referrer">site do projeto</Link></h3>
        <h3 className="underline"><Link href='https://github.com/cjfswd/cjfswd' target="_blank" referrerPolicy="no-referrer">link do projeto no github</Link></h3>
    </>)
}