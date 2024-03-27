import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Home</NavLink>

                            <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Listed Books</NavLink>
                            <NavLink to='/pagesread' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Pages to Read</NavLink>
                            <NavLink to='/deliveryinfo' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Delivery Info</NavLink>
                            <NavLink to='/contactus' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Contact Us</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BookishBliss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Home</NavLink>

                        <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Listed Books</NavLink>
                        <NavLink to='/pagesread' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Pages to Read</NavLink>
                        <NavLink to='/deliveryinfo' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Delivery Info</NavLink>
                        <NavLink to='/contactus' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Contact Us</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn bg-green-400 text-white">Sign In</a>
                    <a className="btn">Sign Up</a>
                </div>
                
            </div>


            {/* <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">BookishBliss</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-5">

                    <NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Home</NavLink>

                    <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Listed Books</NavLink>
                    <NavLink to='/pagesread' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Pages to Read</NavLink>
                    <NavLink to='/deliveryinfo' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Delivery Info</NavLink>


                </div>
                <div className="navbar-end gap-3">
                    <a className="btn bg-green-400 text-white">Sign In</a>
                    <a className="btn">Sign Up</a>
                </div>
            </div> */}
        </>
    );
};

export default Navbar;


