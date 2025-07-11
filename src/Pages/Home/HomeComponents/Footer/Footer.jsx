import './footer.css'
import arrowEmail from '../../../../assets/bottom/arrow-email.svg'
import arrowSocial from '../../../../assets/bottom/arrow-social.svg'


export default function Footer() {
    return (
        <section className='footer-home-container'>
            <div className='grid-global'>
                <div className='head-text'>
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
        </section>
    )
}