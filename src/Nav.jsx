import logo from './assets/images/logo.svg';
import moon from './assets/images/icon-moon.svg';

function Nav() {
  return (
<div className="bg-white flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 px-3 rounded-2xl sticky top-0 z-50 shadow mx-5 gap-3 py-2">

      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Icon */}
      <div className="flex bg-[hsl(0,7%,92%)] rounded-2xl h-10 w-10 items-center justify-center">
        <img src={moon} alt="Moon" className="h-5" />
      </div>
    </div>
  );
}

export default Nav;
