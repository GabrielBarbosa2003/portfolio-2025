import './footer.css'
import arrow from '../../../../assets/icon-arrow.png'
import linkedin from '../../../../assets/linkedin-logo.png'
import github from '../../../../assets/github-logo.png'

export default function Footer() {
    return (
        <section className='footer-home-container'>
            <div className='grid-global'>
                <div className='footer-grid'>
                    <div className='lets-talk'>
                        <h1>Let's <br></br>talk</h1>
                    </div>
                    <div className='contact-container'>
                        <h2>My Contacts</h2>
                        <p>If you have a project in mind, let's work together!</p>
                        <div className='email-container'>
                            <p>Email</p>
                            <div className='email'>
                                <img src={arrow} alt='arrow icon' />
                                <a href='mailto:gabrieldecarvalhu@gmail.com'><p>gabrieldecarvalhu@gmail.com</p></a>
                            </div>
                        </div>
                        <div className='social'>
                            <div className='each-social'>
                                <a href='https://www.linkedin.com/in/devgabrielbarbosa/' target="_blank">
                                    <div className='logo'>
                                        <img src={linkedin} alt='' />
                                    </div>
                                </a>
                            </div>

                            <div className='each-social'>
                                <a href='https://github.com/GabrielBarbosa2003' target="_blank">
                                    <div className='logo'>
                                        <img src={github} alt='' />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}