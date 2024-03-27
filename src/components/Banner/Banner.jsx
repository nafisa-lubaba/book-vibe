import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-10 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse px-20">
                <img src='https://i.ibb.co/CM7ksMx/pngwing-1.png' className=" h-full rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
                    <Link to ='/listedbooks' className="btn bg-green-500 text-white">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;