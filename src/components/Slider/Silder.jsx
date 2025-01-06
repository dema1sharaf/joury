import "./Slider.css"
import Slide from "../Slide/Slide";
import slider1 from "../../assets/slider1.jpg"
import slider2 from "../../assets/slider2.webp"
import { useEffect , useState } from "react";


const sliderData = [
    {  title: "Welcome to Our Shop",
        description: "Discover the best flowers for every occasion.",
        buttonText: "Shop Now",
        image: slider1,
    } ,
     {
        title: "Exclusive Offers",
        description: "Don't miss out on our limited-time discounts.",
        buttonText: "Explore",
        image: slider2,
     }
];



const Slider = () => {

    const [currentIndex , setCurrentIndex] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => {
                    setCurrentIndex((prevIndex) =>   prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1);
            } , 5000);
            return () => clearInterval(interval); // Cleanup the interval when component unmounts
        }, []);

   

        const goToPrevious = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
              ); 
        };
        
        const goToNext = () => {
            setCurrentIndex((prevIndex) =>
              prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
            );
          };


return (
    <div className="slider">
        {sliderData.map((slide,index) => (
             <div
             key={index}
             className={`slide ${index === currentIndex ? "active" : ""}`}
             style={{
               display: index === currentIndex ? "block" : "none",
             }}
           >
            <Slide key={index} title={slide.title} description={slide.description} buttonText={slide.buttonText} image={slide.image} />
            </div>
            
        )
        )
        }
         <button className="slider-button prev" onClick={goToPrevious} aria-label="Previous Slide">
        &#8592;
      </button>
      <button className="slider-button next" onClick={goToNext} aria-label="Next Slide">
        &#8594;
      </button>
    </div>
);

}


export default Slider;