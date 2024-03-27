import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl">oppppsss!!!</h1>
            <h1 className="text-2xl">404 error the page</h1>
            <Link to='/'><button  className="btn bg-green-400 text-white">GO BACK TO HOME</button></Link>
            
        </div>
    );
};

export default ErrorPage;