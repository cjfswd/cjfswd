import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const categories = ['development']

export default async function Page() {
    return (<>
        <h1>WebAssembly um novo potencial disruptivo no browser</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>Neste artigo, vou contar como desenvolvi um projeto React integrando a biblioteca FFmpeg.wasm. A ideia surgiu da necessidade de converter arquivos de mídia, como imagens, áudios e vídeos. Usei a tecnologia WebAssembly (Wasm) para incorporar as funcionalidades do FFmpeg diretamente no navegador, melhorando a experiência do usuário. Isso mostra como o Wasm pode potencializar aplicações web com recursos avançados antes restritos a apps nativos, tornando-os mais interativos e eficientes no navegador.</p>
        <h2>Unindo Tecnologias para a Conversão de Mídia</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/webasm.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>Ao perceber a recorrência da necessidade de converter diferentes formatos de mídia, decidi criar um site que oferecesse essa funcionalidade de maneira ágil. A escolha de utilizar o FFmpeg.wasm como base para a conversão se mostrou acertada, uma vez que essa biblioteca traz consigo todo o poder de processamento do FFmpeg diretamente para o navegador.</p>
        <h2>Desenvolvimento em Etapas</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/software-stages.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <ul>
            <li>
                <strong>Integração do FFmpeg.wasm:</strong> A primeira etapa foi a integração da biblioteca FFmpeg.wasm ao meu projeto React. Isso permitiu que eu utilizasse as capacidades de processamento de mídia do FFmpeg diretamente no meu código.
            </li>
            <li>
                <strong>Interface de Usuário Intuitiva:</strong> Criei uma interface de usuário amigável usando componentes React e elementos HTML. Isso permitiu que os usuários carregassem seus arquivos de mídia e escolhessem as opções de conversão de forma descomplicada.
            </li>
            <li>
                <strong>Processo de Conversão de Mídia:</strong> Ao selecionarem um arquivo de mídia e definirem as opções de conversão, as funcionalidades do FFmpeg.wasm eram acionadas para realizar o processo de conversão. Isso incluiu a configuração de parâmetros como formato de entrada, formato de saída e outras configurações.
            </li>
            <li>
                <strong>Download dos Arquivos Convertidos:</strong> Ao invés de exibir diretamente os resultados, optei por fornecer links para o download dos arquivos de mídia convertidos. Isso garantiu que os usuários pudessem salvar os resultados conforme necessário.
            </li>
        </ul>
        <h2>Resultado e Reflexões</h2>
        <p>A integração bem-sucedida do FFmpeg.wasm com o meu projeto React resultou em um site de conversão de mídia funcional e eficiente. A experiência me permitiu explorar o potencial do WebAssembly para trazer bibliotecas complexas ao ambiente do navegador, abrindo portas para soluções mais interativas e dinâmicas.</p>
        <h2>Conclusão</h2>
        <p>Ao final dessa jornada de desenvolvimento, fiquei impressionado com a facilidade de integração do FFmpeg.wasm ao meu projeto React e a eficiência que essa combinação trouxe para a conversão de mídia. A experiência ressaltou a capacidade de unir tecnologias modernas para criar soluções práticas e eficazes para desafios do mundo real, como a conversão de diferentes formatos de mídia de maneira rápida e intuitiva.</p>
        <h3 className="underline"><Link href='https://convert-ffmpeg.vercel.app/' target="_blank" referrerPolicy="no-referrer">site do projeto</Link></h3>
        <h3 className="underline"><Link href='https://github.com/cjfswd/online-ffmpeg-converter' target="_blank" referrerPolicy="no-referrer">link do projeto no github</Link></h3>
    </>)
}