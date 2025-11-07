"use client"
import useProduct from "../hooks/useProduct";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import Macbook14 from './three/Macbook-14'
import StudioLights from "./three/studioLights";
import SwitchMacbook from "./three/switchMacbook";
import { useMediaQuery } from "react-responsive";

const ProductCanvas = () => {
    const { color, setColor, scale, setScale, reset } = useProduct()
    console.log(color)
    const isMobile = useMediaQuery({ query: "(max-width:1024px)" })
    return (
        <section id="productCanvas">
            <h1>Take A Closer Look</h1>
            <div className="controllContainer">
                <p>MacBook Pro 16" in Silver</p>
                <div className="controlls">
                    <div className="colorController">
                        <div className={clsx("bg-gray-500", color === '#2e2c2e' && 'ring-3')}
                            onClick={() => setColor('#2e2c2e')} />
                        <div className={clsx("bg-black", color === '#abd5bd' && 'ring-3')}
                            onClick={() => setColor('#abd5bd')} />
                    </div>
                    <div className="sizeController">
                        <div className={clsx(scale === 0.06 ? "bg-amber-5" : "bg-transparent")}
                            onClick={() => setScale(0.06)}><p>16"</p></div>
                        <div className={clsx(scale === 0.08 ? "bg-amber-5" : "bg-transparent")}
                            onClick={() => setScale(0.08)}><p>18"</p></div>
                    </div>
                </div>
            </div>
            <Canvas id="canvas"  camera={{ position: [0, 2, 5], near: 0.1, far: 100, fov: 50 }}>
            
                <OrbitControls enableZoom={false} />
                <SwitchMacbook scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
                <StudioLights />
            </Canvas>
            
        </section>



    );
}

export default ProductCanvas;
