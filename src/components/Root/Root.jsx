import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';


const Root = () => {
    return (
        <div className='mx-auto w-[90%]'>
           <div className='h-16'>
           <Navbar></Navbar>
           </div>
           <div>
           <Outlet></Outlet>
           </div>
           
         

            
            
        </div>
    );
};

export default Root;