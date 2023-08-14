import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const categories = ['development']

export default async function Page() {
    return (<>
        <h1>Contornando a perda de qualidade em imagens nas redes sociais</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>Compartilho hoje minha recente experiência na elaboração de uma galeria virtual de imagens em resolução 4K, por meio da integração das sólidas ferramentas Nuxt.js e Vue.js. Este artigo tem como propósito documentar o processo e as escolhas estratégicas que nortearam o desenvolvimento desse projeto, focalizando especialmente nas decisões de design e nas tecnologias empregadas.</p>
        <h2>Crítica</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/pixlated-image.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>Em um contexto em que a qualidade visual desempenha um papel crucial na experiência dos usuários, é oportuno abordar a crescente preocupação com a degradação da qualidade das imagens nas redes sociais. Esta iniciativa nasceu da necessidade de proporcionar um ambiente onde imagens em resolução 4K pudessem ser apreciadas em sua máxima qualidade, livre das restrições impostas por plataformas que tendem a comprimir imagens.</p>
        <h2>Desenvolvimento da Galeria Virtual em 4K</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/picture-gallery.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>O cerne deste projeto reside na implementação de uma galeria virtual que ofereça imagens em resolução 4K de forma notável. Utilizando as funcionalidades do Vue.js, foram elaborados componentes altamente modulares, responsáveis pelo gerenciamento de cada imagem. A manutenção da integridade da resolução 4K foi uma prioridade, sendo tomadas medidas para assegurar que a qualidade visual não fosse comprometida. Ao contrário das plataformas de redes sociais que submetem imagens à compressão, o foco deste projeto consistiu em proporcionar uma visualização nítida e envolvente.</p>
        <h2>Utilização Inteligente de Recursos: Discord.gg como CDN</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/discord-cdn.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>Uma parte crucial da estratégia de desenvolvimento envolveu a seleção de uma CDN (Content Delivery Network) eficaz para hospedar as imagens de alta resolução. Nesse sentido, optei pelo Discord.gg, que ofereceu uma abordagem inovadora. Ao contrário de muitas outras plataformas, o Discord.gg não compromete a qualidade das imagens e permite acesso público de forma gratuita. Uma das vantagens mais notáveis foi a capacidade de fazer o upload de mais de 27GB de imagens sem custos adicionais, proporcionando um ambiente acessível e generoso para a hospedagem das imagens da galeria virtual. Essa escolha estratégica demonstrou ser uma solução viável e eficiente para garantir que a qualidade visual das imagens em 4K fosse preservada e disponibilizada ao público de maneira impecável.</p>
        <h2>Carregamento Sob Demanda e Animações</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/lazy-loading.png'} fill={true} alt='table' className="absolute rounded object-cover" />
        </div>
        <p>Dois desafios destacaram-se no decorrer do processo de desenvolvimento: a necessidade de carregar imagens de alta resolução e o desafio de implementar animações suaves para aprimorar a experiência do usuário. Para enfrentar o primeiro desafio, foi adotada a técnica de carregamento sob demanda (lazy loading), garantindo que as imagens fossem carregadas apenas quando estivessem visíveis na tela, otimizando a performance do site.</p>
        <p>No tocante ao segundo desafio, a biblioteca Animate.css foi incorporada ao projeto, oferecendo uma série de animações predefinidas para elementos HTML. Essas animações, discretas e harmoniosas, conferiram um nível adicional de interatividade, aprimorando a exploração da galeria.</p>
        <h2>Conclusão</h2>
        <p>Neste projeto, explorei as capacidades do Nuxt.js e Vue.js para desenvolver uma galeria virtual realçando imagens em resolução 4K. Ao analisar a compressão de imagens em redes sociais, destaquei a importância de preservar a qualidade das imagens originais, e ao superar desafios como o carregamento de imagens pesadas e animações, conseguimos proporcionar aos usuários uma experiência fluida e esteticamente satisfatória. Minha esperança é que essa narrativa inspire outros desenvolvedores a valorizarem a excelência visual e a explorarem as oportunidades oferecidas pelas tecnologias atuais, permitindo-nos criar experiências online que genuinamente celebrem o trabalho de artistas e fotógrafos, apresentando suas criações de maneira autêntica e envolvente.</p>
        <h3 className="underline"><Link href='https://gallery-ps4.vercel.app/' target="_blank" referrerPolicy="no-referrer">site do projeto</Link></h3>
        <h3 className="underline"><Link href='https://github.com/cjfswd/gallery-ps4' target="_blank" referrerPolicy="no-referrer">link do projeto no github</Link></h3>
    </>)
}