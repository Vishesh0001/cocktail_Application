"use client"
import { navLinks } from "@/constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(20px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Valvet pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={`#${link.id}`} key={link.id} className="flex items-center gap-2">
                                    <p>{link.title}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar