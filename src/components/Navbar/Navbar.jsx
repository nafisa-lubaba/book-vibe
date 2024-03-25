import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <NavLink to='/' className={({isActive})=>isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Home</NavLink>
                    
                    <NavLink to='/listedbooks' className={({isActive})=>isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Listed Books</NavLink>
                    <NavLink to='/pagesread' className={({isActive})=>isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Pages to Read</NavLink>
                   
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="btn">Button</a>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;