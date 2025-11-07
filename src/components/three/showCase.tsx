'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const ShowCase = () => {
    useGSAP(() => {
        const timeLine = gsap.timeline({
            scrollTrigger: {
                trigger: ".mediaContainer",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true
            }
        })
        timeLine.to(".container img", { scale: 1.2 })
    }, [])
    return (
        <section>
            <div className="mediaContainer  relative overflow-hidden">
               <video src={'/video/game.mp4'} autoPlay muted loop className="object-cover object-center  " />
                <div className="container absolute top-0  h-full ">
                    <img src={'/mask-logo.svg'} className=" scale-6000  h-full " />
                </div>   
            </div>
                 <h2 className="text-5xl font-bold m-5">Rocket Chip</h2>
                <div className="iInfo flex">
                    <div className="info1 flex flex-col max-w-150 ">
                        <p className="m-5">Introducing M4, the next generation of Apple Silicon. M4 powers</p>

                        <p className="m-5">It drives Apple Intelligence on Ipad Pro, so you can write,create and accomplish more with ease. All in a design that's unbelievabaly thin, light, and powerfull.</p>

                        <p className="m-5">A brand-new display engine delivers breathtaking precision,color,accurecy, and brightness. And a nextogen GPU with harware accelerated ray tracing brings console- level graphics to your fingertip</p>
                        <p className="m-5">Learn more about Apple interlligence</p>
                    </div>
                    <div className="flex flex-col  p-5">
                        <p className="m-3"> Up to</p>

                        <h1 className="text-3xl font-bold m-3">4x faster</h1>

                        <p className="m-3">Pro Renderince Performence than M2 Up to</p>

                        <p className="m-3">Up to</p>

                        <h1 className="text-3xl font-bold m-3">1.5x faster</h1>

                        <p className="m-3">CPU performence than M2</p>

                        <p className="m-3">Up to</p>

                    </div>
                </div>
        </section>
    );
}

export default ShowCase;