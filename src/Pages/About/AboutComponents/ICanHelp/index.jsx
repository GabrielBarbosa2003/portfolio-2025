import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; import './icanhelp.css'
import { useRef } from "react";

export default function ICanHelp() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const titleRef = useRef()


    useGSAP(() => {
        const sections = [...document.querySelectorAll('.item-list')];

        sections.forEach((sec) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top center",
                end: "bottom center",
                toggleClass: { targets: sec, className: "active" },
                onEnter: () => sec.classList.add("active"),
                onLeave: () => sec.classList.remove("active"),
                onEnterBack: () => sec.classList.add("active"),
                onLeaveBack: () => sec.classList.remove("active"),
            })
        })

        gsap.fromTo(titleRef.current,{
            opacity: 0,
            xPercent: -10
        },{
            opacity:1,
            xPercent: 0,
            scrollTrigger:{
                trigger:titleRef.current
                
            }

        })
    })

    return (
        <section className='icanhelp-section'>
            <div className='grid-global'>
                <h1 ref={titleRef}>Eu posso te ajudar com...</h1>

                <div className='list-help'>
                    <div className='item-list'>
                        <h2>Sites</h2>
                        <div className='text-grid-help'>
                            <p>Eu crio sites responsivos, com foco em pequenas <br></br> interaçoes, utilizando react, gsap e three.js</p>
                        </div>
                    </div>

                    <div className='item-list'>
                        <h2>Sistemas</h2>
                        <div className='text-grid-help'>
                            <p>Já trabalhei em diversos sitemas front-end, desde <br></br> grandes projetos a pequenos SASS</p>
                        </div>
                    </div>

                    <div className='item-list'>
                        <h2>Design</h2>
                        <div className='text-grid-help'>
                            <p>Caso nao tenha um projeto pronto, podemos<br></br> criar algo com sua cara</p>
                        </div>
                    </div>

                </div>




            </div>

        </section>
    )
}