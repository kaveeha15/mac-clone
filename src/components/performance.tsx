'use client'
import { performanceImages,imgPosition } from '@/src/const/constent'
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Performance = () => {

    const sectionRef = useRef()
    useGSAP(() => {
        const timeline = gsap.timeline({
            defaults: { ease: 'power1.inOut', duration: 2 },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        imgPosition.forEach((item) => {
            if (item.id === 'img5') return
            const selector = `.${item.id}`
            const vars = { }
            if (typeof item.left === 'number') vars.left = `${item.left}%`
            if (typeof item.right === 'number') vars.right = `${item.right}%`
            if (typeof item.bottom === 'number') vars.bottom = `${item.bottom}%`
            if (item.transform) item.vars = item.transform;
            timeline.to(selector, vars, 0)
        });
    }, [])


    return (
        <section id='performance' ref={sectionRef}>
            <h2>Next Level Grafic performance,Game on</h2>
            <div className="imgWrapper">
                {
                    performanceImages.map(({ id, src }) => (
                        <img key={id} src={src} className={id} />
                    ))
                }
            </div>
        </section>
    );
}

export default Performance;