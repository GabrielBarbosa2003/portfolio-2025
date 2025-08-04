import { useGSAP } from '@gsap/react';
import './navbar.css'
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SplitType from 'split-type'
export default function NavBar() {
    gsap.registerPlugin(useGSAP);

    const menuItens = [{ text: "Work", link: "#works" }, { text: "About", link: "/about" }, { text: "Contact", link: "#contact" }]
    const liRefs = useRef([])
    const charsRefs = useRef([])

    const creativeText = useRef(null)
    const textSplit = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef();

    useLayoutEffect(() => {
        liRefs.current.forEach((el, i) => {
            const split = new SplitType(el, { types: "chars" })
            charsRefs.current[i] = split.chars
        })

        let splitTextNav = new SplitType(creativeText.current, { types: "chars" })
        textSplit.current = splitTextNav.chars
    }, [])

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

    function createMenuMobile() {
        setIsMenuOpen(!isMenuOpen)
    }

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
                ease: "power4.inOut",
                duration: 1,
            },0).fromTo(charsRefs.current,{
                yPercent: 100
            },{
                yPercent: 0,
                stagger: 0.01
            })
    })



    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen])


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
                        <>
                            <p onClick={createMenuMobile}>Menu</p>
                            <div className='menu-overlay'>
                                <div className='grid-global'>
                                    <div className='navbar'>
                                        <p>@Gabriel Barbosa</p>
                                        <p onClick={createMenuMobile}>Menu</p>
                                    </div>

                                    <div className='links-mobile'>
                                        <ul>
                                            {menuItens.map((item, index) => (
                                                <li
                                                    key={index}
                                                    ref={(el) => (liRefs.current[index] = el)}
                                                    onClick={createMenuMobile}
                                                >
                                                    <a href={item.link}>
                                                        {item.text}
                                                    </a>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='social-mobile-menu'>
                                        <p>Linkedln</p>
                                        <p>GitHub</p>
                                        <p>Instagram</p>
                                    </div>

                                </div>
                            </div>
                        </>


                    )}

                </div>

            </div>
        </div>
    )
}