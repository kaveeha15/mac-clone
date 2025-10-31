"use client"

import { useEffect, useRef } from "react";
const Hero = () => {
const videoRef=useRef <HTMLVideoElement>(null)
useEffect(()=>{
if (videoRef.current)videoRef.current.playbackRate=3
},[])
    return ( 

        <section id="hero">
            <h2 className="text-4xl font-bold">MacBook Pro</h2>
            <img src="title.png" alt="title"/>
            <video src="/video/hero.mp4" ref={videoRef} autoPlay muted/>
            <button>Buy</button>
            <p>Buy for $1599 Or $1333</p>
        </section>
     );
}
 
export default Hero;