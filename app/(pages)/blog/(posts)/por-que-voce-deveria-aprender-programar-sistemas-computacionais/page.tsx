import Image from 'next/image'
import Bot from './img/bot.png'
import Access from './img/access2.png'
import Fisheye from './img/fisheye.png'
import { Badge } from "@/components/ui/badge"
export const categories = ['development']

export default function Page() {
    return (<>
        <h1>Por que você deveria aprender programar sistemas computacionais</h1>
        <div className='mb-10 mt-3'>{categories.map(item => <Badge>{item}</Badge>)}</div>
        <p>Aprender programação de sistemas computacionais pode abrir portas incríveis de oportunidades e trazer inúmeros benefícios para sua carreira e desenvolvimento pessoal. Neste post, vou compartilhar com você os principais motivos pelos quais aprender programação de sistemas computacionais é tão valioso, destacando os aspectos mais relevantes que impulsionarão seus resultados. Então, vamos lá!</p>
        <div className='mt-12 grid grid-cols-3 gap-x-6 gap-y-8'>
            <div className='col-span-2'>
                <h2>Flexibilidade e independência</h2>
                <p>Dominar a programação de sistemas computacionais pode oferecer a flexibilidade de trabalhar como freelancer, empreender ou até mesmo trabalhar remotamente. Você tem a liberdade de escolher o tipo de trabalho e o ambiente que melhor se adequa às suas necessidades.</p>
            </div>
            <div className='col-span-2'>
                <h2>Alta demanda no mercado de trabalho</h2>
                <p>A demanda por profissionais de programação de sistemas computacionais está em constante crescimento. As empresas estão buscando talentos com habilidades técnicas para atender às necessidades de um mundo cada vez mais digitalizado.</p>
            </div>

            <div className="relative col-start-3 row-start-1 row-end-4"><Image src={Fisheye} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
        </div>
        <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
                <h2>Automação e eficiência</h2>
                <p>Através da programação, você pode criar soluções que automatizam tarefas repetitivas e demoradas, aumentando a eficiência e liberando tempo para se concentrar em atividades de maior valor.</p>
            </div>
            <div>
                <h2>Habilidades transferíveis</h2>
                <p>A programação de sistemas computacionais não é apenas útil na indústria de tecnologia. As habilidades de programação são altamente transferíveis e podem ser aplicadas em diversos setores, desde finanças até saúde, marketing e educação.</p>
            </div>
            <div className="relative aspect-[16/9] ml:aspect-[32/9] sm:col-span-2"><Image src={Bot} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div>
                <h2>Inovação e criatividade</h2>
                <p>A programação de sistemas computacionais permite que você seja um criador e inovador. Com habilidades de programação, você pode transformar suas ideias em realidade, desenvolvendo aplicativos, jogos, sites e muito mais.</p>
            </div>
            <div>
                <h2>Resolução de problemas</h2>
                <p>A programação desenvolve suas habilidades de resolução de problemas e pensamento lógico. Aprender a decompor problemas complexos em partes menores e encontrar soluções eficientes é uma habilidade inestimável em qualquer área.</p>
            </div>
        </div>
        <div className='mt-12 grid grid-cols-3 gap-x-6 gap-y-8'>
            <div className="relative row-span-3"><Image src={Access} fill={true} alt={"wtf"} className="rounded object-cover" /></div>
            <div className='col-span-2'><h2>Acesso à informação e aprendizado contínuo</h2>
                <p>Através da programação, você ganha a capacidade de acessar e analisar grandes quantidades de dados, permitindo que tome decisões mais informadas e baseadas em evidências. Além disso, a área de programação está em constante evolução, exigindo aprendizado contínuo e mantendo sua mente afiada.</p>
            </div>
            <div className='col-span-2'>
                <h2>Personalização e criatividade</h2>
                <p>Ao aprender a programar, você pode personalizar seus próprios aplicativos, sites e projetos de acordo com suas preferências e necessidades. Isso permite expressar sua criatividade e construir soluções verdadeiramente únicas.</p>
            </div>
        </div>
        <h2>Conclusão</h2>
        {/* <div className="relative h-full w-full aspect-[42/9]"><Image src={Connection} fill={true} alt={"wtf"} className="rounded object-cover" /></div> */}
        <p>Embora esses sejam motivos essenciais para aprender programação de sistemas computacionais, eles são apenas uma pequena parte do amplo conjunto de benefícios que você pode obter. Ao explorar esses aspectos fundamentais, você estará no caminho certo para conquistar resultados significativos em sua jornada de programação.</p>
        <p>Portanto, aproveite essas informações como um ponto de partida e mergulhe no mundo da programação. Desenvolva suas habilidades, explore novas possibilidades e colha os frutos dessa valiosa competência.</p>
        <p>Lembre-se, dominar a programação de sistemas computacionais pode abrir portas, impulsionar sua carreira e permitir que você crie soluções impactantes. Então, comece sua jornada de aprendizado hoje mesmo e aproveite todos os benefícios que a programação tem a oferecer. O futuro está nas suas mãos!</p>
        {/* # 


## 1. :



## 2. :



## 3. :



## 4. :



## 5. :
![](/blog/bot.png)


## 6. :



## 7. :



## 8. :



## 9. :



## 10. :
![](/blog/connection.png)




 */}
    </>)
}


