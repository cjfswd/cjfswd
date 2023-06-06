import Image from 'next/image'
import Structure from './img/structure.png'
import Ilogic from './img/ilogic.png'
import Declarative from './img/declarative.png'
import Complement from './img/complement.png'
import { Badge } from "@/components/ui/badge"

export const categories = ['markup']

export default function Page() {
    return (<>
        <h1>Por que Linguagens de Marcação Não São Consideradas Linguagens de Programação</h1>
        <div className='mb-10 mt-3'>{categories.map(item => <Badge>{item}</Badge>)}</div>
        <p>No vasto universo da programação, existem diferentes tipos de linguagens que desempenham papéis distintos e atendem a diferentes propósitos. Entre elas, destacam-se as linguagens de marcação, como HTML (Hypertext Markup Language) e XML (Extensible Markup Language). Embora essas linguagens sejam amplamente utilizadas e desempenhem um papel essencial na construção de páginas web e estruturação de dados, elas não são consideradas linguagens de programação propriamente ditas. Neste artigo, vamos explorar as razões por trás dessa distinção e entender o que torna as linguagens de marcação diferentes das linguagens de programação.</p>
        <div className="relative mt-3 hidden aspect-[42/9] ml:block"><Image src={Structure} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
        <div className='mt-8 flex flex-col gap-3 ml:grid ml:grid-cols-4 ml:gap-4 sm:gap-6'>
            <div className="relative row-span-1 hidden ml:row-span-2 ml:block"><Image src={Ilogic} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-3'>
                <h2>1. Estruturação de Conteúdo</h2>
                <p>Linguagens de marcação, como HTML, foram projetadas principalmente para estruturar e organizar o conteúdo de um documento. Elas fornecem uma sintaxe clara e padronizada para definir elementos como títulos, parágrafos, listas e links, permitindo que os navegadores interpretem e apresentem o conteúdo de maneira adequada aos usuários. No entanto, a capacidade de estruturação de conteúdo não é suficiente para qualificar uma linguagem como uma linguagem de programação completa.</p></div>
            <div className='col-span-4 ml:col-span-3'>
                <h2>2. Falta de Lógica e Controle</h2>
                <p>Ao contrário das linguagens de programação, as linguagens de marcação não oferecem recursos avançados de lógica e controle de fluxo. Elas não possuem estruturas condicionais, loops ou a capacidade de tomar decisões com base em dados ou interações do usuário. Em vez disso, seu foco principal é fornecer uma maneira de descrever a estrutura e o significado dos dados, sem abordar a execução de algoritmos complexos.</p>
            </div>
            <div className="relative col-start-1 row-span-1 hidden ml:row-span-2 ml:block"><Image src={Declarative} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-3'>
                <h2>3. Natureza Declarativa</h2>
                <p>Uma característica fundamental das linguagens de marcação é sua natureza declarativa. Em vez de instruir explicitamente um computador a executar determinadas ações, as linguagens de marcação descrevem como o conteúdo deve ser estruturado e apresentado. Essa abordagem contrasta com as linguagens de programação, que são mais orientadas a instruções e algoritmos. As linguagens de marcação definem a aparência e a organização do conteúdo, mas não a lógica por trás dele.</p>
            </div>
            <div className='col-span-4 ml:col-span-3'>
                <h2>4. Foco na Apresentação</h2>
                <p>Outra diferença crucial entre as linguagens de marcação e as linguagens de programação é o foco na apresentação versus a lógica. As linguagens de marcação são projetadas para definir a aparência visual do conteúdo em um navegador ou em outras mídias. Elas especificam como os elementos devem ser exibidos, como cores, fontes e posicionamento. Em contraste, as linguagens de programação estão preocupadas principalmente com a manipulação e o processamento de dados.</p>
            </div>
            <div className="relative col-start-1 row-span-1 hidden ml:row-span-2 ml:block"><Image src={Complement} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-3'>
                <h2>5. Utilização Complementar</h2>
                <p>Embora as linguagens de marcação não sejam consideradas linguagens de programação, é importante ressaltar que elas desempenham um papel crucial no desenvolvimento web. Elas são frequentemente utilizadas em conjunto com linguagens de programação, como JavaScript e CSS (Cascading Style Sheets), para criar páginas web interativas e responsivas. As linguagens de marcação fornecem a estrutura básica do conteúdo, enquanto as linguagens de programação adicionam funcionalidades e interatividade.</p>
            </div>
            <div className='col-span-4 ml:col-span-3'>
                <h2>Conclusão</h2>
                <p>Embora as linguagens de marcação sejam essenciais para a construção de páginas web e organização de dados, elas não são consideradas linguagens de programação devido à sua ênfase na estruturação de conteúdo, falta de recursos de lógica e controle, natureza declarativa, foco na apresentação e seu papel complementar ao das linguagens de programação. Compreender as diferenças entre esses dois tipos de linguagens é fundamental para os programadores e desenvolvedores web, pois permite utilizar a combinação correta de ferramentas para alcançar os melhores resultados em seus projetos.</p>
            </div>
        </div>
    </>)
}

