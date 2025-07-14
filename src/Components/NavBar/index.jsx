import './navbar.css'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import SplitType from 'split-type'
export default function NavBar() {

    const menuItens = ["Work", "About", "Contact"]
    const liRefs = useRef([])
    const charsRefs = useRef([])

    const creativeText = useRef(null)
    const textSplit = useRef()

    useEffect(() => {
        liRefs.current.forEach((el, i) => {
            const split = new SplitType(el, { types: "chars" })
            charsRefs.current[i] = split.chars
        })

        let splitTextNav = new SplitType(creativeText.current, { types: "chars" })
        textSplit.current = splitTextNav.chars
    })

    function menuMouseEnter(index) {

        gsap.to(charsRefs.current[index], {
            yPercent: -100,
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

    function changeNameNavBarEnter() {
        gsap.to(textSplit.current, {
            yPercent: -100,
            ease: "power2.inOut",
            stagger: 0.005
        })
    }

    function changeNameNavBarLeave() {
        gsap.to(textSplit.current, {
            yPercent: 0,
            ease: "power2.inOut",
            stagger: 0.005
        })
    }


    return (
        <div className="grid-global">
            <div className="navbar">
                <div className="home-creative"

                    onMouseEnter={() => changeNameNavBarEnter()}
                    onMouseLeave={() => changeNameNavBarLeave()}
                >
                    <p ref={creativeText}>
                        @Gabriel Barbosa
                        <br></br>
                        @Creative Developer
                    </p>
                </div>

                <div className="navbar-links">
                   {window.innerWidth > 480 ? (
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
                   ) : (
                    <p>Menu</p>
                   )}

                </div>

            </div>
        </div>
    )
}