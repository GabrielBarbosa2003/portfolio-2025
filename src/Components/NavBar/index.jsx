import './navbar.css'
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SplitType from 'split-type'
export default function NavBar() {

    const menuItens = [{text: "Work", link: "#works"}, {text: "About", link: "/about"}, {text: "Contact", link:"#contact"}] 
    const liRefs = useRef([])
    const charsRefs = useRef([])

    const creativeText = useRef(null)
    const textSplit = useRef()

    useLayoutEffect(() => {
        liRefs.current.forEach((el, i) => {
            const split = new SplitType(el, { types: "chars" })
            charsRefs.current[i] = split.chars
        })

        let splitTextNav = new SplitType(creativeText.current, { types: "chars" })
        textSplit.current = splitTextNav.chars
    },[])

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
                    <Link to={"/"}>
                        <p ref={creativeText}>
                            @Gabriel Barbosa
                            <br></br>
                            @Creative Developer
                        </p>
                    </Link>
                </div>

                <div className="navbar-links">
                    {window.innerWidth > 480 ? (
                        <ul className="list-menu">
                            {menuItens.map((item, index) => (
                                <li
                                    key={index}
                                    ref={(el) => (liRefs.current[index] = el)}
                                    onMouseEnter={() => menuMouseEnter(index)}
                                    onMouseLeave={() => menuMouseLeave(index)}
                                >
                                    <a href={item.link}>
                                        {item.text}
                                        <br></br>
                                        {item.text}
                                    </a>

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