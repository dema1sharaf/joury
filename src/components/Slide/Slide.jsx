import "./Slide.css"


const Slide = ({ title , description , image , buttonText }) => {


return (
    <div className="slide" style={{ backgroundImage: `url(${image})`}}>
    <div className="slide-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  </div>

);



}


export default Slide;