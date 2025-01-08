import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Slider from "../components/Slider/Silder";
import SectiionMiniCards from "../components/SectionMiniCards/SectionMiniCards";
import ProductGrid from "../components/CardBestSeller/ProductGrid";
import CategoriesGrid from "../components/CategoriesSection/CategoiresGrid";
import TypesGrid from "../components/CategoriesSection/TypesGrid";


const Home =  () => (
    <>
   <Header />
   <Slider />
   <SectiionMiniCards />
   <ProductGrid title="Our Premium Flower Selection"/>
   <CategoriesGrid title={"Popular Occasions"}/>
   <TypesGrid title={"New Ideas"}/>
   <br/>
   <br/>
   <Footer />
   </>
)

//Header

//footer


export default Home