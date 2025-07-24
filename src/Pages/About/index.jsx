import './about.css'
import me from '../../assets/myself.png'
import ICanHelp from './AboutComponents/ICanHelp'
import Experience from './AboutComponents/Experience'
import Footer from '../Home/HomeComponents/Footer/Footer'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import animateText from '../../services/animeTexts'
import { gsap } from "gsap";

export default function About() {
    const titleRef = useRef()
    const aboutMeRef = useRef()
    const imageRef = useRef()

    function animateImageAbout() {
        gsap.fromTo([imageRef.current, aboutMeRef.current], {
            opacity: 0,
            yPercent: 20,
            ease: "power1.inOut",
        }, {
            opacity: 1,
            yPercent: 0,
            ease: "power1.inOut",
            delay: 0.5
        })
    }
    useGSAP(() => {
        // animateText(titleRef)
        // animateImageAbout()
    }, [])
    return (
        <>
            {/* <section className='container-about'>
                <div className='grid-global'>
                    <div className='about-text' ref={titleRef}>
                        <p>Creative Developer from Brazil <br></br> working globally</p>
                        <div className='initial-text'>
                            {window.innerWidth >= 481 ? (
                                <h1>Between pixels, coffee, and ideas, <br></br>
                                    I create interfaces that tell <br></br>
                                    stories and make people <br></br>
                                    want to stay.</h1>

                            ) : (
                                <h1>Between pixels, coffee, and ideas,
                                    I create interfaces that tell
                                    stories and make people
                                    want to stay.</h1>
                            )}



                        </div>

                    </div>

                    <div className='about-me'>
                        <div className='myself'>
                            <img src={me} alt='myself' ref={imageRef} />
                        </div>

                        <div className='text-about-me' ref={aboutMeRef}>
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



            </section> */}
            <ICanHelp />
            <Experience />
            <Footer />
        </>
    )
}