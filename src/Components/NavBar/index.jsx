import './navbar.css'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import SplitType from 'split-type'
export default function NavBar() {

    const menuItens = ["Work", "About", "Contact"]
    const liRefs = useRef([])
    const charsRefs = useRef([])

    useEffect(() => {
        liRefs.current.forEach((el, i) => {
            const split = new SplitType(el, { types: "chars" })
            charsRefs.current[i] = split.chars
        })

    })

    function menuMouseEnter(index) {

        gsap.to(charsRefs.current[index], {
            yPercent: -90,
            ease: "power2.inOut",
            stagger: 0.02
        })
    }

    function menuMouseLeave(index) {

        gsap.to(charsRefs.current[index], {
            yPercent: 0,
            ease: "power2.inOut",
            stagger: 0.02
        })
    }


    return (
        <div className="grid-global">
            <div className="navbar">
                <div className="home-creative">
                    <p>
                        @Creative Developer
                    </p>
                </div>

                <div className="navbar-links">
                    <ul className="list-menu">
                        {menuItens.map((item, index) => (
                            <li
                                key={item}
                                ref={(el) => (liRefs.current[index] = el)}
                                onMouseEnter={() => menuMouseEnter(index)}
                                onMouseLeave={() => menuMouseLeave(index)}
                            >
                                {item}
                                <br></br>
                                {item}

                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </div>
    )
}