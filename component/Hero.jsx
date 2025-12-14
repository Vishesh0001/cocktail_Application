"use client"

import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
// import { useMediaQuery } from "react-responsive"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger, SplitText)


const Hero = () => {
 const videoRef = useRef();

const isMobile = useMediaQuery({ maxWidth: 768 })

   useGSAP(() => {
  const heroSplit = new SplitText(".title", {
    type: "chars,words",
    reversed: true
  })

  const paragraphSplit = new SplitText(".subtitle", {
    type: "lines",
    reversed: true
  })

  heroSplit.chars.forEach(char =>
    char.classList.add("text-gradient")
  )

  gsap.from(heroSplit.chars, {
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.06
  })

  gsap.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.06,
    delay: 1
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })
    .to(".right-leaf", { y: 200 }, 0)
    .to(".left-leaf", { y: -200 }, 0)
 if (!videoRef.current) return

  const startValue = isMobile ? "top 50%" : "center 60%"
  const endValue = isMobile ? "120% top" : "bottom top"

  const video = videoRef.current

  const onLoaded = () => {
    gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true
      }
    }).to(video, {
      currentTime: video.duration,
      ease: "none"
    })
  }

  if (video.readyState >= 1) {
    onLoaded()
  } else {
    video.addEventListener("loadedmetadata", onLoaded)
  }

  return () => {
    video.removeEventListener("loadedmetadata", onLoaded)
  }

}, [isMobile])

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">
                    MOJITO
                </h1>
                <img src="/images/hero-left-leaf.png"
                    alt="left-leaf"
                    className="left-leaf"
                />
                <img src="/images/hero-right-leaf.png"
                    alt="right-leaf"
                    className="right-leaf"
                />
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crispy. Refreshing.</p>
                            <p className="subtitle">
                                The perfect <br />blend of flavors
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every Cocktail in our menu is handcrafted with the finest ingredients to create a unique and unforgettable experience for our customers.
                            </p>
                            <a href="#cocktails">View cocktails</a>
                        </div>
                    </div>
                </div>


            </section>
            <div className="video absolute inset-0">
              <video
              ref={videoRef}
              src="/videos/input.mp4" 
              muted
               playsInline
                preload="auto"/>
            </div>
        </>
    )
}

export default Hero