"use client"
import useProduct from "../hooks/useProduct";
import clsx from "clsx";

const ProductCanvas = () => {
    const { color, setColor, scale, setScale, reset } = useProduct()
    console.log(color)
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
                        <div className={clsx(scale === 0.08 ? "bg-gray-500" : "bg-transparent")}
                            onClick={() => setScale(0.08)}><p>16"</p></div>
                        <div className={clsx(scale === 0.15 ? "bg-gray-500" : "bg-transparent")}
                            onClick={() => setScale(0.15)}><p>18"</p></div>
                    </div>
                </div>

            </div>
        </section>



    );
}

export default ProductCanvas;
