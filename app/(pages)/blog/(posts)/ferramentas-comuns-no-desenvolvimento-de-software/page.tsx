import Image from 'next/image'
import IDE from './img/ide.png'
import Versioning from './img/versioning.png'
import Framework from './img/framework.png'
import LibraryPackage from './img/library_package.png'
import Test from './img/test.png'
import Database from './img/database.png'
import TaskRunner from './img/task_runner.png'
import Container from './img/container.png'
import { Badge } from "@/components/ui/badge"

export const categories = ['tool']

export default async function Page() {
    return (<>
        <h1>Ferramentas comuns no desenvolvimento de software</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>O desenvolvimento de software é um campo dinâmico, repleto de uma ampla gama de ferramentas para auxiliar os desenvolvedores em suas tarefas diárias. Neste artigo, exploraremos as principais ferramentas utilizadas no ecossistema Node.js, JavaScript e TypeScript, e como elas podem ser utilizadas para obter resultados excepcionais.</p>
        <h2>Ambientes de Desenvolvimento Integrado(IDEs) / Editores de Código</h2>
        <div className="relative aspect-[42/9]"><Image src={IDE} fill={true} alt={"wtf"} loading='lazy' className=" rounded object-cover" /></div> 
        <p>Os IDEs, como o Visual Studio Code, Sublime Text e Atom, e editores de código são ferramentas essenciais para os desenvolvedores. Eles oferecem recursos avançados, como autocompletar, depuração e integração com controle de versão, facilitando o processo de desenvolvimento.</p>
        <h2>Sistemas de Controle de Versão</h2>
        <div className="relative aspect-[42/9]"><Image src={Versioning} fill={true} alt={"wtf"} loading='lazy' className="aspect-[42/9] rounded object-cover" /></div>
        <p>Os sistemas de controle de versão, como o Git, são fundamentais para rastrear e gerenciar alterações no código - fonte. Eles permitem que os desenvolvedores colaborem em equipe, revertam alterações e facilitem a integração contínua.</p>
        <h2>Gerenciadores de Dependências</h2>
        <p>Os gerenciadores de dependências, como o npm e o Yarn, simplificam a instalação e o gerenciamento de bibliotecas e pacotes necessários para um projeto. Eles garantem que as dependências sejam corretamente instaladas e atualizadas.</p>
        <h2>Frameworks de Desenvolvimento</h2>
        <div className="relative aspect-[42/9]"><Image src={Framework} fill={true} alt={"wtf"} loading='lazy' className="aspect-[42/9] rounded object-cover" /></div>
        <p>Frameworks, como o Express, React e Vue.js, fornecem uma estrutura para desenvolver aplicativos de maneira rápida e eficiente. Eles oferecem recursos pré - construídos e facilitam o desenvolvimento de aplicações robustas.</p>
        <h2>Bibliotecas e Pacotes</h2>
        <div className="relative aspect-[42/9]"><Image src={LibraryPackage} fill={true} alt={"wtf"} loading='lazy' className="aspect-[42/9]rounded object-cover" /></div>
        <p>Bibliotecas e pacotes pré - escritos, como o Lodash, Axios e Moment.js, fornecem funcionalidades específicas que podem ser incorporadas em projetos.Utilizar essas bibliotecas economiza tempo e esforço ao desenvolver determinadas funcionalidades.</p>
        <h2>Ferramentas de Teste</h2>
        <div className="relative aspect-[42/9]"><Image src={Test} fill={true} alt={"wtf"} loading='lazy' className="aspect-[42/9] rounded object-cover" /></div>
        <p>Ferramentas de teste, como o Jest e o Mocha, são cruciais para garantir a qualidade e a confiabilidade do software. Elas permitem escrever testes automatizados, realizar asserções e verificar a cobertura de código.</p>
        <h2>Sistemas de Gerenciamento de Banco de Dados(SGBDs) / Bancos de Dados e ORMs</h2>
        <div className="relative aspect-[42/9]"><Image src={Database} fill={true} alt={"wtf"} loading='lazy' className="aspect-[42/9] rounded object-cover" /></div>
        <p>No desenvolvimento de aplicações, o uso de SGBDs, como o MongoDB, PostgreSQL e MySQL, é comum. Além disso, ORMs, como o Sequelize e o TypeORM, facilitam a interação com bancos de dados relacionais.</p>
        <h2>Ferramentas de Automação / Task Runners e Bundlers</h2>
        <div className="relative aspect-[42/9]"><Image src={TaskRunner} fill={true} alt={"wtf"} loading='lazy' className="aspect-[42/9] rounded object-cover" /></div>
        <p>Ferramentas de automação, como o Gulp e o webpack, simplificam tarefas de construção, otimização e empacotamento de projetos. Elas automatizam processos repetitivos e melhoram o desempenho geral do aplicativo.</p>
        <h2>Containers / Virtualização</h2>
        <div className="relative aspect-[42/9]"><Image src={Container} fill={true} alt={"wtf"} loading='lazy' className="aspect-[42/9]rounded object-cover" /></div>
        <p>O uso de containers, como o Docker, e máquinas virtuais(VMs) é benéfico para criar ambientes isolados e facilitar a implantação consistente do software em diferentes ambientes.</p>
        <p>Dominar essas ferramentas e explorar seu potencial em projetos reais ajudará você a obter resultados excepcionais no desenvolvimento de software no ecossistema Node.js, JavaScript e TypeScript.Continuar aprendendo e se atualizando com as ferramentas mais relevantes é essencial para se destacar no campo do desenvolvimento de software.</p>
    </>)
}

