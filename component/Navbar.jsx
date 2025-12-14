"use client"
import { navLinks } from "@/constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                end: 'bottom top',
                scrub: true,    
            }
        });

      navTween.fromTo(
  'nav',
  {
    backgroundColor: 'rgba(25, 25, 25, 0)',
    backdropFilter: 'blur(0px)'
  },
  {
    backgroundColor: 'rgba(21, 21, 21, 0.3)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(20px)', // REQUIRED for Safari
    duration: 1,
    ease: 'power1.inOut'
  }
)

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