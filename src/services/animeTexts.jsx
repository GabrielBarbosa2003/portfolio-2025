import SplitType from 'split-type'
import { gsap } from "gsap";

export default function animateText(...textRefs) {
    textRefs.forEach(textRef => {
        //  if (!textRefs?.current) return;
         
        const text = new SplitType(textRef.current, { types: 'words, chars' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top bottom-=50px',
                end: 'bottom bottom',
            }
        })

        tl.fromTo(text.chars, {
            yPercent: 100,
            ease: "power2.inOut",
        }, {
            yPercent: 0,
            ease: "power2.inOut",
            stagger: 0.003

        })
    })
}