import { useState } from "react";
import { hotDeals, bestSellers, topRated } from "../store/data";
import CompactCard from "./CompactCard";
import BannarImage from "/Images/Bannar.png";


const Showcase = () => {
  const [currDeal, setDeal] = useState(0);
  const categories = [ 'Hot Deals', 'Best Sellers', 'Top Rated' ];
  const dealsData = [ hotDeals, bestSellers, topRated ];
  
  function handlePrev() {
    setDeal((prevDeal) => 
      prevDeal === 0 ? categories.length - 1 : prevDeal - 1
    );
  }
  function handleNext() {
    setDeal((prevDeal) => 
      prevDeal === categories.length - 1 ? 0 : prevDeal + 1
    );
  }
  
  
  // Mobile View
  return ( <div className="mt-16">
    <div className="flex flex-col justify-between items-center mb-3 lg:hidden">
      <div className="flex items-center justify-between w-full mb-4 px-4">
        <button 
        onClick={handlePrev}
          className="p-2 border border-gray-300 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all hover:bg-primary hover:text-white animate">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <h3 className="text-2xl "> {categories[currDeal]} </h3>
          <button 
            onClick={handleNext}
            className="p-2 border border-gray-300 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all hover:bg-primary hover:text-white animate">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
        </div>
            <div className="flex flex-col gap-5">
              {
                dealsData[currDeal].map((item) => (
                  <div key={item.id} className="lg:block">
                    <CompactCard
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    />
                  </div>
                ))
              }
            </div>
    </div>

    {/* Desktop View */}
    <div className="hidden lg:flex flex-col gap-6 justify-center mb-10">
      <div className="flex gap-5 flex-wrap justify-center items-stretch">
        {
          dealsData.map((dealCategory, index) => (
            <div key={index} className="flex flex-col h-full">
              <h3 className="text-xl mb-4 text-left"> {categories[index]} </h3>
              <div className="flex flex-col gap-5 flex-wrap justify-center">
                {
                  dealCategory.map((item) => (
                    <CompactCard
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      image={item.image}
                    />
                  ))
                }
              </div>
            </div>
          ))
        }
        </div>
      
    </div>
  </div> );
}
 
export default Showcase;