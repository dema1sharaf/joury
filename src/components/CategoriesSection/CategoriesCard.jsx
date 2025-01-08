import "./CategoriesGrid.css";

const CategoriesCard = ( {title , image }) => {

    return (
        <div className="item" >
        <div className="image-circle">
          <img src={image} alt={title} />
        </div>
        <p className="item-text">{title}</p>
      </div>
    );
}


export default CategoriesCard;