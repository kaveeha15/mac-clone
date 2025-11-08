import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/hero";
import ProductCanvas from "../components/productCanvas";
import ProductContextComp from "../context/productContext";
import ShowCase from "../components/three/showCase";
import Performance from "../components/performance";
export default function Home() {
  return (
    <ProductContextComp>
      <main>
        <Nav />
        <Hero />
        <ProductCanvas />
        <ShowCase/>
        <Performance/>
      </main>
    </ProductContextComp>

  )
}
