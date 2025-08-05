import { useGSAP } from '@gsap/react';
import './navbar.css'
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SplitType from 'split-type'
export default function NavBar() {
    gsap.registerPlugin(useGSAP);

    const menuItens = [{ text: "Work", link: "#works" }, { text: "About", link: "/about" }, { text: "Contact", link: "#contact" }]

    const creativeText = useRef(null)
    const textSplit = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef();

    useLayoutEffect(() => {

        let splitTextNav = new SplitType(creativeText.current, { types: "chars" })
        textSplit.current = splitTextNav.chars


    }, [])


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
        const links = document.querySelectorAll(".links-mobile ul li")

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
                ease: "power4.inOut",
                duration: 1,
            }, 0).fromTo(links, {
                yPercent: 100
            }, {
                yPercent: 0,
                ease: "power1.inOut",
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

                    <p className="cursor" onClick={createMenuMobile}>Menu</p>
                    <div className='menu-overlay'>
                        <div className='grid-global'>
                            <div className='navbar-overlay'>
                                <Link to={"/"} onClick={createMenuMobile}><p>@Gabriel Barbosa</p></Link>
                                <p onClick={createMenuMobile} className="cursor">Close</p>
                            </div>

                            <div className='links-mobile'>
                                <ul>
                                    <div className='container-li'>
                                        <li onClick={createMenuMobile}>
                                            <a href={"#works"} >
                                                Work
                                            </a>
                                        </li>
                                    </div>

                                    <div className='container-li'>
                                        <li >
                                            <Link to={"/about"} onClick={createMenuMobile} >
                                                About
                                            </Link>
                                        </li>
                                    </div>
                                    <div className='container-li'>
                                        <li onClick={createMenuMobile}>
                                            <a href={"#contact"} >
                                                Contact
                                            </a>

                                        </li>
                                    </div>

                                </ul>
                            </div>
                            <div className='social-mobile-menu'>
                                <a href='https://www.linkedin.com/in/devgabrielbarbosa/' target='_blank'>
                                    <p>Linkedln</p>
                                </a>
                                <a href='https://github.com/GabrielBarbosa2003' target='_blank'>
                                    <p>GitHub</p>
                                </a>
                                <a href='https://www.instagram.com/gabriellbarbosa/' target='_blank'>
                                    <p>Instagram</p>
                                </a>
                            </div>

                        </div>
                    </div>





                </div>

            </div>
        </div>
    )
}