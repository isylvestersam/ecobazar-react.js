import appleImage from '../Images/apple.png'
import starIcon from '../Icons/star-icon.svg';
import unstarIcon from '../Icons/unstar.svg'
import shoppingBag from '../Icons/add-to-cart.svg'

const ProductCard = ( {image} ) => {
  return ( <div className='flex flex-col justify-between border border-gray-300 px-4 pb-4 h-68 rounded-xl max-w-52'>
    <img src={appleImage} alt="" />
    <div>
      <div className='flex justify-between items-center'>
      <div>
        <h4 className='text-gray-500'>Green Apple</h4>
        <h2 className='text-xl'>$14.99</h2>
      </div>
      <button>
        <img src={shoppingBag} alt="" />
        </button>
      </div>
      <div className='flex gap-1'>
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={unstarIcon} alt="" />
      </div>
    </div>
  </div> );
}
 
export default ProductCard;