import breadcrumbsMobile from '../Images/breadcrumbs-mobile.png'
import breadcrumbsDesktop from '../Images/breadcrumbs-desktop.png'
import arrowIcon from '../Icons/arrow-icon.svg'
import homeIcon from '../Icons/home-icon.svg'

const BreadCrumbs = ( { navs } ) => {
  return ( <div className='w-full h-16 relative flex items-center lg:h-22 '>
    <div className='absolute h-full w-full'>
      <img  src={breadcrumbsDesktop} className='hidden lg:block w-full h-full object-cover' />
      <img src={breadcrumbsMobile} className='lg:hidden w-full h-full object-cover' />
    </div>

    {/* Navigator Div */}
    <div className='z-50 pl-9 flex gap-3 items-centerv'> 
      <img src={homeIcon} className='w-6 '/>
      {
        navs.map((nav, index) => (
          <div className='flex gap-3 items-center' key={nav}>
            <img src={arrowIcon} />
            <p className={ 
              navs.length - 1 === index 
              ? 'text-green-500'
              : 'text-[#999999]'
            }> {nav} </p>
          </div>
          
        ))
      }
    </div>
  </div> );
}
 
export default BreadCrumbs;