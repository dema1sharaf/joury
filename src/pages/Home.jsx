import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Slider from "../components/Slider/Silder";
import SectiionMiniCards from "../components/SectionMiniCards/SectionMiniCards";
import ProductGrid from "../components/CardBestSeller/ProductGrid";


const Home =  () => (
    <>
   <Header />
   <Slider />
   <SectiionMiniCards />
   <ProductGrid title="Our Premium Flower Selection"/>
   <br/>
   <br/>
   <Footer />
   </>
)

//Header

//footer


export default Home