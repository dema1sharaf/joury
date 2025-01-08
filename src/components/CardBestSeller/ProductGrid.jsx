import flower1 from "../../assets/flower1.png"
import flower2 from "../../assets/flowe2.png"
import ProductCard from "./ProductCard";
import "./ProductCard.css";
import { useState } from "react";

const BestSellerArray = [
    {
        id: 1,
        title: "product 1",
        description : "Desc1",
        price: 50,
        featured: true,
        image : flower1
    },
    {
        id: 2,
        title: "product 2",
        description : "Desc2",
        featured: false,
        price: 44,
        image : flower2
    },
    {
        id: 3,
        title: "product 3",
        description : "Desc3",
        featured: true,
        price: 44,
        image : flower1
    },
    {
        id: 4,
        title: "product 4",
        featured: true,
        price: 100,
        image : flower2
    },
    {
        id: 5,
        title: "product 5",
        description : "Desc3",
        featured: true,
        price: 44,
        image : flower1
    },
    {
        id: 6,
        title: "product 6",
        featured: true,
        price: 100,
        image : flower2
    }
    
]

const ProductGrid = ({title}) => {

    const [currentPage, setCurrentPage ] = useState(1)
    const itemsPerPage = 4;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = startIndex + itemsPerPage;

    const currentFlower = BestSellerArray.slice(startIndex,lastIndex)

    const totalPages = Math.ceil(BestSellerArray.length / itemsPerPage)

    return (
        <div className="product-section">
        {/* Section Title */}
        <h2 className="section-title">{title}</h2>

        <div className="pagination-controls">
        {/* Left Arrow */}
        <button
          className={`pagination-arrow ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => setCurrentPage(() => Math.ceil(currentPage - 1, totalPages) )}
          disabled={currentPage === 1}
        >
          ←
        </button>
        {/* Right Arrow */}
        <button
          className={`pagination-arrow ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() => setCurrentPage(() => Math.ceil(currentPage + 1, totalPages) )}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>

        <div className="product-grid">
        {currentFlower.map( (product,index) => (
            <ProductCard key={index} title={product.title} description={product.description} image={product.image} featured={product.featured} price={product.price}/>
        ) )}
        </div>
     
        </div>
    );

}

export default ProductGrid;