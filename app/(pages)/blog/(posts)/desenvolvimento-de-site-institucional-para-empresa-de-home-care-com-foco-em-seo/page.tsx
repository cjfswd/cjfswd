import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const categories = ['development']

export default async function Page() {
    return (<>
        <h1>Desenvolvimento de Site Institucional para Empresa de Home Care com Foco em SEO</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>Neste artigo, exploramos a criação de um site institucional para uma empresa de home care, com ênfase na otimização para mecanismos de busca (SEO). Abordaremos a importância do SEO, a apresentação de serviços, história da empresa, depoimentos de clientes e detalhes de contato.</p>
        <h2>O Papel Central do SEO</h2>
        <p>Em um mercado competitivo online, a visibilidade nos mecanismos de busca é vital. O SEO é essencial para garantir que o site seja encontrado. Isso envolve a pesquisa de palavras-chave, otimização de metadados, conteúdo de qualidade e garantir que o site seja responsivo e rápido.</p>
        <h2>Apresentando os Serviços de Forma Clara</h2>
        <p>Destacar os serviços é fundamental. Isso significa fornecer descrições detalhadas e destacar benefícios. Os visitantes devem compreender claramente o que a empresa oferece.</p>
        <h2>Apresentando os Serviços de Forma Clara</h2>
        <p>Destacar os serviços é fundamental. Isso significa fornecer descrições detalhadas e destacar benefícios. Os visitantes devem compreender claramente o que a empresa oferece.</p>
        <h2>Narrativa da Empresa para Credibilidade</h2>
        <p>Contar a história da empresa acrescenta credibilidade. Inclua detalhes sobre fundação, valores e desafios superados. Isso constrói confiança com os visitantes.</p>
        <h2>Depoimentos de Clientes como Prova Social</h2>
        <p>Depoimentos reais de clientes satisfeitos agregam prova social. Essas histórias ilustram como a empresa beneficiou pessoas, fortalecendo a credibilidade.</p>
        <h2>Facilitando a Interatividade com Canais de Contato</h2>
        <p>Facilite o contato, com detalhes claros como números de telefone, e-mails e formulários. Um chat ao vivo pode oferecer interação instantânea.</p>
        <h2>Conclusão</h2>
        <p>Criar um site institucional vai além do design. SEO, apresentação de serviços, história da empresa, depoimentos e detalhes de contato são essenciais para uma presença online eficaz. Ao combinar esses elementos, a empresa pode ganhar visibilidade, construir confiança e alcançar sucesso no mundo digital em constante evolução.</p>
        <h3 className="underline"><Link href='http://www.equipededicar.com/' target="_blank" referrerPolicy="no-referrer">site do projeto</Link></h3>
        <h3 className="underline"><Link href='https://github.com/dedicar-team/site' target="_blank" referrerPolicy="no-referrer">link do projeto no github</Link></h3>
    </>)
}