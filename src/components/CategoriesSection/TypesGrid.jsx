import logo from "../../assets/logo.ico"
import CategoriesCard from "./CategoriesCard";
import "./CategoriesGrid.css"
import { useState } from "react";


const categoriesArray = [
    {
        id: 1,
        title : "Flower",
        image : logo
    },
    {
        id: 2,
        title : "Cake",
        image : logo
    },
    {
        id:3,
        title : "watchs",
        image : logo
    }
]

const TypesGrid = ({title}) => {

     const [currentPage, setCurrentPage ] = useState(1)
            const itemsPerPage = 6;
            const startIndex = (currentPage - 1) * itemsPerPage;
            const lastIndex = startIndex + itemsPerPage;
        
            const currentCategories = categoriesArray.slice(startIndex,lastIndex)
        
            const totalPages = Math.ceil(categoriesArray.length / itemsPerPage)

   return <div className="gift-container">
        <h2 className="headline">{title}</h2>
        { (itemsPerPage !== categoriesArray.length && itemsPerPage < categoriesArray.length) ? 
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
      </div> : "" }
        <div className="items-grid">
        {currentCategories.map((item,index) => (
            <CategoriesCard key={index} title={item.title} image={item.image} />
        ) )}
        </div>
    </div>

}


export default TypesGrid;