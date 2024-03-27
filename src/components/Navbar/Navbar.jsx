import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                
                <a className="btn btn-ghost text-xl">BookishBliss</a>
            </div>
            <div className="navbar-center hidden lg:flex gap-5">
                
                    <NavLink to='/' className={({isActive})=>isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Home</NavLink>
                    
                    <NavLink to='/listedbooks' className={({isActive})=>isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Listed Books</NavLink>
                    <NavLink to='/pagesread' className={({isActive})=>isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Pages to Read</NavLink>
                    <NavLink to='/deliveryinfo' className={({isActive})=>isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Delivery Info</NavLink>
                   
                
            </div>
            <div className="navbar-end gap-3">
                <a className="btn bg-green-400 text-white">Sign In</a>
                <a className="btn">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;

// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <a className="btn btn-ghost text-xl">BookishBliss</a>
//             </div>
//             <div className="navbar-center lg:flex lg:gap-5 hidden">
//                 <NavLink exact to='/' activeClassName="border-b-2 border-green-500 text-green-400 px-3 font-bold">Home</NavLink>
//                 <NavLink to='/listedbooks' activeClassName="border-b-2 border-green-500 text-green-400 px-3 font-bold">Listed Books</NavLink>
//                 <NavLink to='/pagesread' activeClassName="border-b-2 border-green-500 text-green-400 px-3 font-bold">Pages to Read</NavLink>
//                 <NavLink to='/deliveryinfo' activeClassName="border-b-2 border-green-500 text-green-400 px-3 font-bold">Delivery Info</NavLink>
//             </div>
//             <div className="navbar-end lg:flex gap-3">
//                 <a className="btn bg-green-400 text-white">Sign In</a>
//                 <a className="btn">Sign Up</a>
//             </div>
//             <div className="lg:hidden flex flex-col items-center mt-4">
//                 <NavLink exact to='/' activeClassName="text-green-400 font-bold">Home</NavLink>
//                 <NavLink to='/listedbooks' activeClassName="text-green-400 font-bold">Listed Books</NavLink>
//                 <NavLink to='/pagesread' activeClassName="text-green-400 font-bold">Pages to Read</NavLink>
//                 <NavLink to='/deliveryinfo' activeClassName="text-green-400 font-bold">Delivery Info</NavLink>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
