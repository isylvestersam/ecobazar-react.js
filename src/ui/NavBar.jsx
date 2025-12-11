import logo from '../Icons/logo.svg';
import searchIcon from '../Icons/search-icon.svg';
import heartIcon from '../Icons/Heart.svg';
import DividerIcon from '../Icons/Devider.svg';
import HeartIcon from '../Icons/Heart.svg';
import CartImg from '../Icons/Cart.svg'
import { useState } from 'react';
import hamburger from '../Icons/menu.svg'
import { createPortal } from 'react-dom';
import navImage from '../Images/nav-image.png'
import closeImg from '../Icons/x.png'
import homeIcon from '../Icons/home-icon.svg'
import shopImg from '../Icons/shopping-cart.svg';
import bookImg from '../Icons/book.svg'
import questionImg from '../Icons/badge-question-mark.svg';
import phoneImg from '../Icons/phone.svg';
import facebookImg from '../Icons/facebook.svg';
import twitterImg from '../Icons/twitter.svg'
import pinterestImg from '../Icons/pinterest.svg'
import instagramImg from '../Icons/instagram.svg'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenDropDown() {
    setIsOpen(prev => !prev)
  }

  return ( <div>
    <div className='justify-between hidden lg:flex'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex  rounded-lg w-fit'>
        <div className='flex pl-3 border rounded-tl-lg rounded-bl-lg border-gray-300 border-r-0'>
          <img src={searchIcon} className='max-w-4' />
          <input type="text" className='py-2 px-3 w-72 focus:outline-none ' placeholder='Search...'  />
        </div>
        <button className='bg-primary border-primary px-5 py-2 text-white rounded-tr-lg rounded-br-lg hover:bg-hard-primary animate'>
          Seach
        </button>
      </div>
      <div className='flex gap-4'>
        <img src={heartIcon} alt="" />
        <img src={DividerIcon} alt="" />
        <div className='flex gap-2'>
          <img src={CartImg} alt="" />
          <span>
            <p className='text-gray-500'>Shopping Cart:</p>
            <p className='font-semibold'>$57.00</p>
          </span>
        </div>
      </div>
    </div>


    {/* Mobile Nav */}
    <div className='flex flex-col lg:hidden '>
    <div className='flex justify-between items-center mb-3 px-6 py-1 '>
      <img src={logo} className="w-36 " />
      <button onClick={handleOpenDropDown} className='z-50' >
        {
          isOpen ? (
            <img src={closeImg} className='w-8'/>
          ) : (
            <img src={hamburger} className='hover:scale-110 animate w-8 ' />
          )
        }
      </button>

      {/* Drop Down */}
      {
        isOpen ? (
            <div className='fixed flex flex-col pl-8 pb-12 pt-30 h-full justify-between inset-0 z-20 bg-white opacity-97'>
              <div className='z-50 w-full   flex flex-col gap-5 '>
                  <span className='flex gap-3'>
                    <img src={homeIcon} className='w-7' alt="" />
                    <a href="" className='text-xl'>Home</a>
                  </span>
                  <span className='flex gap-3'>
                    <img src={shopImg} className='w-7' alt="" />
                    <a href="" className='text-xl'>Shop</a>
                  </span>
                  <span className='flex gap-3'>
                    <img src={bookImg} className='w-7' alt="" />
                    <a href="" className='text-xl'>Blog</a>
                  </span>
                  <span className='flex gap-3'>
                    <img src={questionImg} className='w-7' alt="" />
                    <a href="" className='text-xl'>About Us</a>
                  </span>
                  <span className='flex gap-3'>
                    <img src={phoneImg} className='w-7' alt="" />
                    <a href="" className='text-xl'>Contact Us</a>
                  </span>
                </div>
                  <div className='flex flex-col gap-2 mt-26'>
                    <a href="" className='underline hover:text-primary animate  text-lg'>Contact Us</a>
                    <a href="" className='underline hover:text-primary animate text-lg'>Privacy Policy</a>
                    <a href="" className='underline hover:text-primary animate text-lg'>Terms and Condition</a>
                  </div>
                  <div className='flex w-full items-center justify-center gap-4 '>
                    <button>
                      <img src={facebookImg} className='w-8'/>
                    </button>
                    <button>
                      <img src={twitterImg} className='w-10'/>
                    </button>
                    <button>
                      <img src={pinterestImg} className='w-10'/>
                    </button>
                    <button>
                      <img src={instagramImg} className='w-10'/>
                    </button>
                  </div>
                
                
              
            </div>
          
        ) : null
      }

      
    </div>

    
  </div>

  </div> );
}
 
export default NavBar;