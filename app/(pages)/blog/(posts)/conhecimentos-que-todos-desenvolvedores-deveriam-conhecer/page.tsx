import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export const categories = ['development']

export default async function Page() {
    return (<>
        <h1>Conhecimentos Básicos para Iniciantes em Programação</h1>
        <div className='mb-10 mt-3'>{categories.map(item => <Badge>{item}</Badge>)}</div>
        <p>Se você está começando sua jornada na programação, provavelmente já ouviu falar sobre a quantidade de informações e conceitos complexos envolvidos nesse campo. Pode parecer assustador, mas tenha certeza de que você não está sozinho. Para ajudá-lo a trilhar esse caminho desafiador, vamos compartilhar com você algumas informações fundamentais que irão impulsionar seus resultados.</p>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 ml:grid-cols-2'>
            <div>
                <h2>Estude algoritmos</h2>
                <p>Um algoritmo é uma sequência de passos para resolver um problema. Aprenda a criar algoritmos eficientes, pois eles são a base para a construção de soluções sólidas.</p>
            </div>
            <div>
                <h2>Compreenda os tipos de dados</h2>
                <p>Familiarize-se com os diferentes tipos de dados, como inteiros, strings e booleanos. Entenda como eles são armazenados e manipulados nos programas.</p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
                <Image src={'/blog/logic.png'} fill={true} alt='table' className="rounded object-cover" />
            </div>
            <div>
                <h2>Aprenda a lógica de programação</h2>
                <p>Antes de mergulhar em linguagens de programação específicas, domine os conceitos básicos de lógica, como estruturas de controle condicionais e loops. Isso é fundamental para entender como os programas funcionam.</p>
            </div>
            <div>
                <h2>Explore uma linguagem de programação</h2>
                <p>Escolha uma linguagem popular, como Python, Java ou JavaScript, e dedique-se a aprendê-la.Comece com os conceitos básicos, como sintaxe, estruturas de controle e funções.</p>
            </div>
            <div >
                <h2>Pratique a resolução de problemas computacionais</h2>
                <p>Resolva problemas de programação regularmente. Desafie-se a encontrar soluções criativas e eficientes para exercitar suas habilidades.</p>
            </div>
            <div>
                <h2>Entenda os conceitos de orientação a objetos</h2>
                <p>Resolva problemas de programação regularmente. Desafie-se a encontrar soluções criativas e eficientes para exercitar suas habilidades.</p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
                <Image src={'/blog/language.png'} fill={true} alt='table' className="rounded object-cover" />
            </div>
            <div>
                <h2>Escreva código limpo e legível</h2>
                <p>A boa prática de escrita de código é essencial para facilitar a manutenção e a colaboração. Adote convenções de nomenclatura e formatação adequadas.</p>
            </div>
            <div>
                <h2>Pratique o versionamento de código</h2>
                <p>Use sistemas de controle de versão, como Git, para rastrear alterações em seu código e colaborar com outros desenvolvedores.</p>
            </div>
        </div>
        <h2>Aprenda a trabalhar com banco de dados</h2>
        <p>Entenda os conceitos básicos de banco de dados, como consultas SQL e manipulação de dados. Isso abrirá portas para desenvolver aplicativos com funcionalidades mais avançadas além de permitir persistir informações ao longo do tempo.</p>
        <h2>Aprenda sobre segurança da informação</h2>
        <p>Compreenda os princípios básicos da segurança cibernética e adote boas práticas para proteger seus aplicativos e dados.</p>
        <h2>Colabore com outros desenvolvedores</h2>
        <div className="relative aspect-[16/9] w-full rounded ml:aspect-[32/9] sm:aspect-[40/9]">
            <Image src={'/blog/meet.png'} fill={true} alt='table' className="rounded object-cover" />
        </div>
        <p>Participe de projetos de código aberto ou trabalhe em equipe em projetos pequenos. Isso permitirá que você aprenda com outros programadores e ganhe experiência prática.</p>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 ml:grid-cols-2'>
            <div>
                <h2>Explore frameworks e bibliotecas</h2>
                <p>Familiarize-se com os frameworks e bibliotecas populares relacionados à sua linguagem de programação escolhida. Eles podem acelerar o desenvolvimento de aplicativos e simplificar tarefas complexas.</p>
            </div>
            <div>
                <h2>Pratique a leitura de documentação</h2>
                <p>Aprenda a ler a documentação de linguagens e bibliotecas. Essa habilidade ajudará você a entender como usar diferentes recursos em seus projetos.</p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded ml:col-span-2 ml:aspect-[32/9] sm:aspect-[40/9]">
                <Image src={'/blog/reading.png'} fill={true} alt='table' className="rounded object-cover" />
            </div>
            <div>
                <h2>Mantenha-se atualizado</h2>
                <p>A programação é um campo em constante evolução. Acompanhe as novidades, tendências e atualizações relevantes para a sua área de interesse.</p>
            </div>
            <div>
                <h2>Construa projetos próprios</h2>
                <p>Aplique o que aprendeu criando projetos pessoais. Isso ajudará a consolidar seu conhecimento e a desenvolver um portfólio para futuras oportunidades.</p>
            </div>
        </div>
        <h2>Conclusão</h2>
        <p>Ao dominar esses conhecimentos básicos, você estará bem encaminhado para alcançar resultados significativos na programação. Lembre-se de que a prática constante e a resolução de problemas desempenham um papel fundamental no seu desenvolvimento. Esteja disposto a enfrentar desafios, aprender com seus erros e nunca deixe de explorar novas áreas. Boa sorte em sua jornada!</p>
    </>)
}