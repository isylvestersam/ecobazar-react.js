import FeaturesSlider from "../ui/FeaturesSlider";



const FeaturedProducts = () => {
  return ( <div className="flex w-full flex-col items-center overflow-auto lg:mt-8 mb-14">
    <div className="flex flex-col items-center">
      <h3 className="text-3xl lg:text-4xl mb-4">Featured Products</h3>
      <p className="text-gray-500 text-center mb-8 lg:w-[65%] text-pretty">Browse our collection of sustainable and eco-friendly products, carefully curated to meet your needs while minimizing environmental impact.</p>
    </div>
    <FeaturesSlider />

  </div> );
}
 
export default FeaturedProducts;