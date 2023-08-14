import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const categories = ['development']

export default async function Page() {
    return (<>
        <h1>Desenvolvendo um Sistema Web Administrativo de Cadastro de Funcionários</h1>
        <div className='mb-10 mt-3'>{categories.map((item, index) => <Badge key={index}>{item}</Badge>)}</div>
        <p>Nos dias de hoje, a eficiência e a organização em processos internos de uma empresa são fundamentais para o sucesso. Nesse contexto, o desenvolvimento de um sistema web administrativo para cadastro de funcionários torna-se crucial para gerenciar dados importantes, desde informações pessoais até experiências profissionais e resultados de entrevistas. Neste artigo, exploraremos como utilizar as tecnologias Next.js, React.js e MongoDB para criar um sistema robusto e eficiente para esse propósito.</p>
        <h2>Benefícios de um Sistema de Cadastro de Funcionários</h2>
        <p>Antes de mergulharmos nos detalhes técnicos, é importante destacar os benefícios de um sistema de cadastro de funcionários:</p>
        <ul>
            <li><strong>Organização:</strong> Ter todos os dados dos funcionários em um único lugar facilita a busca e a atualização de informações.</li>
            <li><strong>Eficiência:</strong> Processos de recrutamento e integração se tornam mais ágeis, economizando tempo e recursos.</li>
            <li><strong>Tomada de Decisão:</strong> Ter acesso a informações detalhadas sobre a equipe ajuda os gestores a tomar decisões informadas.</li>
            <li><strong>Conformidade:</strong> Armazenar documentos e informações pessoais de forma segura auxilia a empresa a cumprir regulamentações de privacidade e segurança.</li>
        </ul>
        <h2>Tecnologias Utilizadas</h2>
        <p>Neste projeto, optamos por utilizar as seguintes tecnologias:</p>
        <ul>
            <li><strong>Next.js:</strong> Um framework React para renderização do lado do servidor (SSR) e geração de páginas estáticas. Isso melhora a velocidade de carregamento e a otimização para mecanismos de busca.</li>
            <li><strong>React.js:</strong> Biblioteca JavaScript para a construção da interface do usuário. Sua abordagem baseada em componentes facilita a criação e a manutenção de interfaces dinâmicas.</li>
            <li><strong>MongoDB:</strong> Um banco de dados NoSQL altamente escalável e flexível, adequado para armazenar dados não estruturados, como os dados dos funcionários.</li>
        </ul>
        <h2>Etapas do Desenvolvimento</h2>
        <ul>
            <li><strong>Configuração do Projeto:</strong> Iniciamos criando um projeto Next.js com o comando de criação. Isso nos forneceu uma estrutura básica para começar a desenvolver.</li>
            <li><strong>Criação de Componentes React:</strong> Desenvolvemos componentes React reutilizáveis para formulários de cadastro, exibição de dados e interações de usuário.</li>
            <li><strong>Integração com MongoDB:</strong> Utilizamos bibliotecas como Mongoose para conectar o aplicativo ao banco de dados MongoDB, permitindo a criação, leitura, atualização e exclusão de registros.</li>
            <li><strong>Roteamento e Navegação:</strong> Aproveitamos a funcionalidade de roteamento do Next.js para criar páginas de cadastro, exibição e edição de funcionários.</li>
            <li><strong>Autenticação e Autorização:</strong> Implementamos um sistema de autenticação para garantir que apenas usuários autorizados possam acessar e modificar os dados dos funcionários.</li>
            <li><strong>Armazenamento de Documentos:</strong> Utilizamos recursos de armazenamento para lidar com o upload e o armazenamento seguro de documentos, como RG e CPF.</li>
            <li><strong>Design Responsivo:</strong> Garantimos que a interface do usuário fosse responsiva, para que pudesse ser acessada e utilizada em dispositivos de diferentes tamanhos.</li>
        </ul>
        <h2>Considerações Finais</h2>
        <p>O desenvolvimento de um sistema web administrativo é uma empreitada que requer a combinação adequada de tecnologias para garantir eficiência, segurança e usabilidade. A combinação do Next.js, React.js e MongoDB ofereceu uma base sólida para atender a esses requisitos. À medida que as empresas continuam a buscar maneiras de otimizar suas operações internas, sistemas como esse desempenham um papel vital na facilitação dos processos de gestão de recursos humanos.</p>
        <h3 className="underline"><Link href='https://caregiver-registry-web.vercel.app/' target="_blank" referrerPolicy="no-referrer">site do projeto</Link></h3>
        <h3 className="underline"><Link href='https://github.com/dedicar-team/core' target="_blank" referrerPolicy="no-referrer">repositório do projeto no github</Link></h3>
    </>)
}