
import logo from './assets/images/logo.svg';
import moon from './assets/images/icon-moon.svg';

function Nav() {

    return (
     
<div className=" mx-5  bg-white flex justify-between items-center h-16 px-3 rounded-2xl   sticky top-0 z-50 shadow  ">
 
  <div>
    <img src={logo} alt="Logo" className="h-10" />
  </div>

 
  <div className='flex bg-[hsl(0,7%,92%)] rounded-2xl h-13 w-13 items-center justify-center  '>
    <img src={moon} alt="Moon" className="h-5" />
  </div>
  

</div>

    )
}

export default Nav 


