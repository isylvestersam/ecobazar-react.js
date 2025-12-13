import { TopCategories } from "../store/data";
import TopCategoryCard from "../ui/TopCategoryCard";

const TopCategory = () => {
  return ( <div className="flex flex-col items-center mt-16 mb-16">
    <h3 className="text-3xl mb-6 font-medium"> 
      Top Categories
    </h3>
    <div className="flex flex-wrap justify-center">
      {
        /* Top Category Cards */
        TopCategories.map((category) => (
          <div key={category.id} className="inline-block mr-4 mb-4">
            <TopCategoryCard 
              image={category.image} 
              title={category.title} 
              amount={category.noInStore} 
              
            />
          </div>
        ))
      }
    </div>
  </div> );
}
 
export default TopCategory;