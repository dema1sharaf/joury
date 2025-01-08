import "./ProductCard.css"


const ProductCard = ({ image , title , price ,featured , description}) => {

    return (
        <div className="product-card">
        <div className="image-wrapper">
          <img src={image} alt={title} className="product-image" />
          <button className="wishlist-btn">♡</button>
          {featured && <div className="premium-badge">Featured</div>}
        </div>
        <div className="product-info">
          <p className="product-title">{title}</p>
          {/* {description && <p className="product-description">{description}</p>} */}
          <p className="product-price">from {price} €</p>
        </div>
      </div>
    );
}


export default ProductCard;