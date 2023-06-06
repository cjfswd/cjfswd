import Image from "next/image"
import Docs from "./img/docs.png"
import Requirement from "./img/requirement.png"
import { Badge } from "@/components/ui/badge"
export const categories = ['development']

export default function Page() {
    return (<>
        <h1>O mínimo que você precisa saber antes de começar a desenvolver software</h1>
        <div className='mb-10 mt-3'>{categories.map(item => <Badge>{item}</Badge>)}</div>
        <div className="grid grid-cols-3 gap-2 ml:gap-6">
            <p className="col-span-3">Você está prestes a mergulhar no mundo da programação e é natural sentir-se sobrecarregado com a quantidade de informações disponíveis. Para ajudá-lo nessa jornada, vou compartilhar com você o conteúdo mais importante que irá impulsionar seus resultados. Aproveite as dicas a seguir para começar com o pé direito!</p>
            <div className="col-span-2 ml:col-span-2 sm:col-span-1">
                <h2>Lógica de Programação</h2>
                <p>Antes de mergulhar em qualquer linguagem específica, é essencial entender os princípios básicos da lógica de programação. Aprenda sobre estruturas de controle, loops e condicionais.</p>
            </div>
            <div className="relative col-span-1 mt-0 h-full w-full ml:row-span-2"><Image src={"/blog/hand-typing-code.png"} fill={true} alt={"wtf"} className="h-full rounded object-cover" /></div>
            <div className="col-span-3 ml:col-span-2 sm:col-span-1">
                <h2>Algoritmos e Estruturas de Dados</h2>
                <p>Familiarize-se com algoritmos comuns e estruturas de dados, como listas, pilhas, filas e árvores. Compreender como usar e implementar essas estruturas será essencial para resolver problemas de forma eficiente.</p>
            </div>
            <div className="col-span-3 sm:col-span-1">
                <h2>Dominar uma Linguagem</h2>
                <p>Escolha uma linguagem de programação popular, como Python, JavaScript ou Java, e domine-a completamente. Concentre-se em entender a sintaxe, estruturas de dados e conceitos fundamentais.</p>
            </div>
            <div className="col-span-3 sm:col-span-1">
                <h2>Versionamento de Código</h2>
                <p>Aprenda a usar sistemas de controle de versão, como Git. Isso permitirá que você trabalhe em equipe, acompanhe alterações no código e reverta alterações, se necessário.</p>
            </div>
            <div className="col-span-3 sm:col-span-3">
                <h2>Ambiente de Desenvolvimento Integrado (IDE)</h2>
                <p>Escolha um IDE que seja confortável para você. Ferramentas populares incluem Visual Studio Code, PyCharm e Eclipse. Familiarize-se com os recursos do IDE e aproveite sua produtividade.</p>
            </div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-2 ml:gap-6">
            <div className="col-span-3">
                <h2>Resolução de Problemas</h2>
                <p>Programar é, em sua essência, resolver problemas. Desenvolva habilidades de resolução de problemas, dividindo-os em partes menores e abordando cada parte individualmente.</p>
            </div>
            <div className="col-span-2">
                <h2>Compreensão de Requisitos</h2>
                <p> Certifique-se de entender completamente os requisitos do projeto antes de começar a codificar. Faça perguntas claras para esclarecer quaisquer ambiguidades.</p>
            </div>
            <div className="relative col-span-1 row-span-1 sm:row-span-2"><Image src={Requirement.src} fill={true} alt={"wtf"} className="h-full rounded object-cover" /></div>
            <div className="col-span-3 sm:col-span-2">
                <h2>Depuração de Código</h2>
                <p>Aprenda a depurar seu código de maneira eficaz. Saiba usar ferramentas de depuração e técnicas de registro para identificar e corrigir erros em seu código.</p>
            </div>
            <div className="col-span-3">
                <h2>Aprenda com a Comunidade</h2>
                <p>Junte-se a fóruns, grupos e comunidades online de programadores. Compartilhe seus desafios, faça perguntas e aprenda com os outros. A comunidade é uma ótima fonte de conhecimento e apoio.</p>
            </div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-3 ml:gap-4 sm:gap-6">
        <div className="relative right-0 ml:row-span-2"><Image src={Docs.src} fill={true} alt={"wtf"} className="h-full rounded object-cover" /></div>
            <div className="col-span-2">
                <h2>Documentação e Pesquisa</h2>
                <p className="col-span-2">Aprenda a pesquisar e consultar a documentação oficial da linguagem que está usando. A documentação será sua melhor amiga ao enfrentar problemas e aprender novos recursos.</p>
            </div>
            <p className="col-span-3 ml:col-span-2">Esses são apenas alguns dos pontos essenciais para começar sua jornada na programação. Lembre-se de que a prática é fundamental para aprimorar suas habilidades. Continue codificando regularmente, desafiando-se com projetos e explorando novas áreas. À medida que sua experiência cresce, você poderá explorar conceitos mais avançados e aprofundar seu conhecimento.</p>
            <div className="col-span-3 ml:col-span-3">
                <h2>Conclusão</h2>
                <p>Boa sorte em sua jornada como programador! Este é apenas o começo, e estou animado para ver o que você alcançará no futuro. Continue aprendendo, criando e nunca pare de se aprimorar. O mundo da programação está repleto de oportunidades emocionantes, e você está pronto para conquistá-las!</p>
            </div>
        </div>
    </>)
}
