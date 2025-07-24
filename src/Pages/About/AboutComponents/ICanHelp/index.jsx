import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './icanhelp.css'
import { useEffect, useRef } from "react";

export default function ICanHelp() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const titleRef = useRef()
    const listRef = useRef([])

    const list = [
        { id: 1, job: "Websites", desc: <>I create responsive websites, focusing on small <br></br> interactions, using react, gsap and three.js</> },
        { id: 2, job: "Systems", desc: <>I've worked on several front-end systems, <br></br> from large projects to small SASS projects.</> },
        { id: 3, job: "Design", desc: <>If you don't have a ready-made project,<br></br> we can create something with your style.</> }
    ]




    useGSAP(() => {

        listRef.current.forEach((sec) => {
            ScrollTrigger.create({
                trigger: sec,
                start: "top center",
                end: "bottom center",
                toggleClass: { targets: sec, className: "active" },
                onEnter: () => sec.classList.add("active"),
                onLeave: () => sec.classList.remove("active"),
                onEnterBack: () => sec.classList.add("active"),
                onLeaveBack: () => sec.classList.remove("active"),
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
        ScrollTrigger.refresh();

    }, [])

    useEffect(() => {
        window.addEventListener('resize', ScrollTrigger.refresh);
        window.addEventListener('load', ScrollTrigger.refresh);

        return () => {
            window.removeEventListener('resize', ScrollTrigger.refresh);
            window.removeEventListener('load', ScrollTrigger.refresh);
        };
    }, []);

    return (
        <section className='icanhelp-section'>
            <div className='grid-global'>
                <h1 ref={titleRef}>I can help you with...</h1>

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