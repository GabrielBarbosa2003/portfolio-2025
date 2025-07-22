import './footer.css'
import arrowEmail from '../../../../assets/bottom/arrow-email.svg'
import arrowSocial from '../../../../assets/bottom/arrow-social.svg'
import dot from '../../../../assets/bottom/dot.png'
import letsTalk from '../../../../assets/bottom/lets-talk.svg'




export default function Footer() {
    return (
        <section className='footer-home-container' id='contact'>
            <div className='grid-global'>
                <div className='head-text-bottom'>
                    <h1>Dont be shy, if you have any project in mind,</h1>
                    <span>Get in touch</span>
                </div>
                <div className='contacts-bottom'>
                    <h2>New Projects / Bussines</h2>
                    <div className='contact-socials'>
                        <div className='email'>
                            <div className='bottom-email'>
                                <img src={arrowEmail} alt='arrow' />
                                <p>gabrieldecarvalhu@gmail.com</p>
                            </div>
                            <p className='number'>+55 (19)99483-3584</p>
                        </div>


                        <div className='grid-mobile-footer'>
                            <div className='social-bottom'>
                                <ul>
                                    <li>
                                        Instagram
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                    <li>
                                        LinkedIn
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                    <li>
                                        Github
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                </ul>

                            </div>

                            <div className='social-bottom'>
                                <ul>
                                    <li>
                                        Work
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                    <li>
                                        About
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                    <li>
                                        PlayGround
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>

                                </ul>

                            </div>
                        </div>





                    </div>
                </div>
                <div className='available'>
                    <div className='work-available'>
                        <p>Available for work</p>
                        <img src={dot} alt='green dot' />
                    </div>
                    <p>Freelance, Full-time</p>
                </div>
                <div className='local-rights'>
                    <p>Brazil-São Paulo</p>
                    <p>
                        © 2025 All rights reserved
                    </p>
                </div>
                <div className='lets-talk'>
                    <img src={letsTalk} alt='lets talk' className='logo' />
                </div>

            </div>
        </section>
    )
}