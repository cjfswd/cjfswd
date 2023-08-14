import Image from 'next/image'
import Productive from './img/productive2.png'
import Pattern from './img/pattern.png'
import Security from './img/security.png'
import Scalability from './img/scalability.png'
import Community from './img/community2.png'
import Reusing from './img/reusing.png'
import Maintence from './img/maintence.png'
import Integration from './img/integration.png'
import { Badge } from "@/components/ui/badge"

export const categories = ['framework']

export default function Page() {
    return (<>
        <h1>Por que usar frameworks em um projeto?</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>Ao desenvolver um projeto, seja ele um site, um aplicativo ou qualquer outra aplicação de software, uma das decisões cruciais a serem tomadas é a escolha do framework adequado. Os frameworks são conjuntos de ferramentas e bibliotecas que facilitam o desenvolvimento, fornecendo uma estrutura e abstração para resolver problemas comuns. Neste artigo, vamos explorar algumas das principais razões pelas quais usar frameworks pode trazer grandes benefícios para o seu projeto, permitindo alcançar resultados superiores.</p>
        <div className='grid grid-cols-3 gap-12'>
            <div className='col-span-2'>
                <h2>1. Produtividade aprimorada</h2>
                <p>Os frameworks oferecem um conjunto de funcionalidades pré-construídas e soluções testadas, o que permite que os desenvolvedores economizem tempo e esforço. Ao invés de começar do zero, é possível aproveitar a infraestrutura fornecida pelo framework para construir rapidamente recursos e funcionalidades.</p>
            </div>
            <div className="relative"><Image src={Productive} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'>
                <h2>2. Padrões de desenvolvimento</h2>
                <p> Os frameworks geralmente seguem padrões e boas práticas estabelecidas pela comunidade de desenvolvimento. Isso significa que você terá acesso a uma estrutura consistente e padronizada para escrever seu código, o que facilita a colaboração entre desenvolvedores e torna o código mais legível e manutenível.</p>
            </div>
            <div className="relative"><Image src={Pattern} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'>
                <h2>3. Segurança aprimorada</h2>
                <p>Muitos frameworks possuem recursos de segurança embutidos, como proteção contra ataques de injeção de SQL, cross-site scripting (XSS) e cross-site request forgery (CSRF). Essas medidas de segurança são implementadas de forma padronizada no framework, reduzindo a probabilidade de erros de segurança e tornando mais fácil para os desenvolvedores manterem seu projeto protegido.</p>
            </div>
            <div className="relative"><Image src={Security} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'>
                <h2>4. Escalabilidade</h2>
                <p>Um bom framework é projetado para lidar com projetos de diferentes tamanhos e complexidades. Eles oferecem recursos que permitem dimensionar a aplicação à medida que o projeto cresce, evitando a necessidade de reescrever todo o código. Isso é especialmente importante em projetos de longo prazo, nos quais a flexibilidade e a escalabilidade são essenciais.</p>
            </div>
            <div className="relative"><Image src={Scalability} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'>
                <h2>5. Comunidade ativa</h2>
                <p> A maioria dos frameworks possui uma comunidade ativa de desenvolvedores que contribuem com melhorias, correções de bugs e suporte técnico. Ao utilizar um framework popular, você terá acesso a recursos valiosos, como documentação abrangente, fóruns de discussão e bibliotecas adicionais desenvolvidas pela comunidade.</p>
            </div>
            <div className="relative"><Image src={Community} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'>
                <h2>6. Reutilização de código</h2>
                <p>Com um framework, é possível aproveitar bibliotecas e componentes já desenvolvidos pela comunidade. Isso significa que você não precisa reinventar a roda toda vez que tiver um novo projeto. A reutilização de código economiza tempo e esforço, permitindo que você se concentre em aspectos únicos do seu projeto.</p>
            </div>
            <div className="relative"><Image src={Reusing} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'>
                <h2>7. Manutenção simplificada</h2>
                <p>Com um framework bem estabelecido, a manutenção se torna mais fácil. Atualizações e correções de bugs são disponibilizadas pela equipe de desenvolvimento do framework, e geralmente é apenas uma questão de atualizar sua aplicação para ter acesso às melhorias mais recentes.</p>
            </div>
            <div className="relative"><Image src={Maintence} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'>
                <h2>8. Integração com outras tecnologias</h2>
                <p>Muitos frameworks são projetados para funcionar perfeitamente com outras tecnologias populares. Eles oferecem integração com bancos de dados, sistemas de gerenciamento de conteúdo (CMS), APIs e muito mais. Essa capacidade de integração simplifica a criação de soluções abrangentes e eficientes.</p>
            </div>
            <div className="relative"><Image src={Integration} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            
        </div>
        <h2>Conclusão</h2>
        <p>Em suma, usar frameworks em projetos de desenvolvimento de software oferece uma série de benefícios que podem levar a resultados excepcionais. Ao fornecer produtividade aprimorada, segurança, padronização, escalabilidade e suporte da comunidade, os frameworks se tornam ferramentas essenciais para desenvolvedores em busca de eficiência e sucesso em seus projetos. Então, da próxima vez que você iniciar um novo projeto, considere seriamente a incorporação de um framework adequado para maximizar seu potencial.</p>
    </>)
}
