import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>

    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/project">Project</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>

  </>

  return (

    <div className="bg-black">
      <div className="w-[1200px] bg-black mx-auto" >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="https://i.ibb.co/LxV5kmC/rsz-seth-blum-optimized.jpg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-white text-xl">Maimun
            </a>
          </div>
          <div className="navbar-center font-bold text-white hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks}
            </ul>
          </div>

          <div className="navbar-end">


            <label tabIndex={0} className=" ">
              <div >

              </div>
            </label>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;