import './about.css'
import me from '../../assets/myself.png'
import ICanHelp from './AboutComponents/ICanHelp'
import Experience from './AboutComponents/Experience'
import Footer from '../Home/HomeComponents/Footer/Footer'

export default function About() {
    return (
        <section className='container-about'>
            <div className='grid-global'>
                <div className='about-text'>
                    <p>Creative Developer from Brazil <br></br> working globally</p>
                    <div className='initial-text'>
                        <h1>Between pixels, coffee, and ideas, <br></br>
                            I create interfaces that tell <br></br>
                            stories and make people <br></br>
                            want to stay.</h1>
                    </div>

                </div>

                <div className='about-me'>
                    <div className='myself'>
                        <img src={me} alt='myself' />
                    </div>

                    <div className='text-about-me'>
                        <p>Gosto de pensar que cada linha de código que escrevo é um convite para as pessoas ficarem mais um pouco.<br></br>
                            <br></br>

                            Sou apaixonado por transformar ideias em experiências digitais que contam histórias, criando interfaces que não apenas funcionam, mas que fazem sentido para quem usa. Entre animações suaves, detalhes quase invisíveis e a busca constante pelo simples, acredito que a tecnologia é mais humana quando respeita o tempo e a atenção de quem está do outro lado da tela.<br></br>
                            <br></br>
                            Se você também acredita que design e código podem mudar como as pessoas sentem, então já temos algo em comum.<br></br>

                            <br></br>
                            E sobre eu ? A... Escrevo código, tomo café e gosto de treinar, já é algo!
                            <br></br>
                             <br></br>

                            Se voce tem alguma ideia, colaboraçoes, ou oportunidade de emprego, nao hesite em entrar em contato.</p>
                    </div>
                </div>

            </div>

            <ICanHelp/>
            <Experience/>
            <Footer/>

        </section>
    )
}