import ProductCard from "./ProductCard";
import { useState } from "react";
import { featuredProducts } from "../store/data";


const MobileFeaturesSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);
  // console.log(featuredProducts);
  let image = featuredProducts[currIndex].image;
  let title = featuredProducts[currIndex].name;
  let price = featuredProducts[currIndex].price;
  let rating = featuredProducts[currIndex].rating;

  function handlePrev() {
    setCurrIndex((prevIndex) => 
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  }

  function handleNext() {
    setCurrIndex((prevIndex) => 
      prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
    );
  }
  

  return ( <div>
    {/* Mobile View */}
    <div className="flex gap-3 justify-center items-center md:gap-10 lg:hidden">
    <button 
    onClick={handlePrev}
    className="p-3 border border-gray-300 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all hover:bg-primary hover:text-white animate">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>
    <div>
      <ProductCard
        image={image}
        title={title}
        price={price}
        rating={rating}
        />
    </div>
    <button 
    onClick={handleNext}
    className="p-3 border border-gray-300 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all hover:bg-primary hover:text-white animate">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>

    </button>
    </div>

    {/* Desktop View */}
    <div className="hidden lg:flex gap-6 flex-wrap justify-center">
      { featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.name}
          price={product.price}
          rating={product.rating}
        />
      )) }
    </div>

  </div> );
}
 
export default MobileFeaturesSlider;