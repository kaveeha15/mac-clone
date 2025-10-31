import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/hero";
import ProductCanvas from "../components/productCanvas";
import ProductContextComp from "../context/productContext";
export default function Home() {
  return (
    <ProductContextComp>
      <main>
        <Nav />
        <Hero />
        <ProductCanvas />
      </main>
    </ProductContextComp>

  )
}
