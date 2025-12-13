

const TopCategoryCard = ({ image, title, amount }) => {
  return ( <div>
    <button className="w-38 h-40 bg-white border border-gray-200 rounded-lg flex flex-col justify-center items-center p-2 hover:shadow-soft animate hover:border-primary cursor-pointer">
      <img src={image} alt="Category" className="mb-4 w-14" />
      <div className="flex flex-col items-center text-center">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-400"> {amount} Products </p>
      </div>
    </button>
  </div> );
}
 
export default TopCategoryCard;