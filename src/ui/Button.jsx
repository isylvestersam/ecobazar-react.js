

const Button = ({ buttonType, buttonSize, classname, children } ) => {
  let type = '';
  let size = '';

  switch (buttonSize) {
    case 'medium':
      size = 'px-6 py-2'
      break
    case 'large':
      size = 'px-9 py-3'
      break
    default:
      size = 'px-4 py-[0.30rem] '
      break;
  }
  switch (buttonType) {
    case 'border':
      type = 'bg-none border-2 text-primary border-primary hover:border-hard-primary hover:text-hard-primary font-semibold'
      break
    case 'ghost':
      type = 'bg-[#EFF7EF] text-primary border-none hover:bg-[#D5E3D5] hover:text-hard-primary'
      break
    default:
      type = 'bg-primary hover:bg-hard-primary border-none text-white '
      break;
  }


  return ( 
    <button
      className={ ` ${type} ${size} ${classname} rounded-full transition-all duration-200 ease-in-out hover:cursor-pointer font-medium` }
    >
      { children }
    </button>
   );
}
 
export default Button;