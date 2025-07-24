import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; import './icanhelp.css'
import { useRef } from "react";

export default function ICanHelp() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const titleRef = useRef()
    const listRef = useRef([])

    const list = [
        { id: 1, job: "Sites", desc: <>Eu crio sites responsivos, com foco em pequenas <br></br> interaçoes, utilizando react, gsap e three.js</> },
        { id: 2, job: "Sistemas", desc: <>Já trabalhei em diversos sitemas front-end, desde <br></br> grandes projetos a pequenos SASS</> },
        { id: 3, job: "Design", desc: <>Caso nao tenha um projeto pronto, podemos<br></br> criar algo com sua cara</> }
    ]


    useGSAP(() => {
        const sections = [...document.querySelectorAll('.item-list')];
        console.log(listRef.current)

        listRef.current.forEach((sec) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top 50%",
                end: "bottom 50%",
                toggleClass: { targets: sec, className: "active" },
                onEnter: () => sec.classList.add("active"),
                onLeave: () => sec.classList.remove("active"),
                onEnterBack: () => sec.classList.add("active"),
                onLeaveBack: () => sec.classList.remove("active"),
                markers: true,
                invalidateOnRefresh: true,
            })
        })

        gsap.fromTo([titleRef.current], {
            opacity: 0,
            xPercent: -10
        }, {
            opacity: 1,
            xPercent: 0,
            scrollTrigger: {
                trigger: titleRef.current

            }

        })


    })

    return (
        <section className='icanhelp-section'>
            <div className='grid-global'>
                <h1 ref={titleRef}>Eu posso te ajudar com...</h1>

                <div className='list-help'>

                    {list.map((item, index) => (
                        <div className='item-list' key={item.id} ref={(el) => listRef.current[index] = el}>
                            <h2>{item.job}</h2>
                            <div className='text-grid-help'>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* <div className='item-list'>
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
                    </div> */}

                </div>




            </div>

        </section>
    )
}