import React from 'react';
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const Wish = ({ books }) => {
        const { bookId, image, bookName, author, tags, category, totalPages, rating, publisher, yearOfPublishing } = books
    return (
        <div className="flex flex-col md:flex-row gap-5 p-5 rounded-xl border-slate-100 border-2">
    <div className="bg-slate-200 px-8 py-4 md:px-16 md:py-8 rounded-2xl">
        <img src={image} alt="" className="w-full" />
    </div>
    <div className="flex flex-col flex-1">
        <div>
            <h2 className="text-2xl">{bookName}</h2>
            <p>By: {author}</p>
        </div>
        <div className="flex flex-wrap mt-2 items-center">
            <p>Tag:</p>
            {tags.map((tag, index) => (
                <span key={index} className="inline-block text-green-500 px-3 text-sm font-semibold mr-2 my-2">
                    #{tag}
                </span>
            ))}
            <button className="mr-2"><IoLocationOutline /></button>
            <p>Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
            <div className="flex items-center gap-2">
                <GoPeople />
                <p>Publisher: {publisher}</p>
            </div>
            <div className="flex items-center gap-2">
                <GoPeople />
                <p>Pages: {totalPages}</p>
            </div>
        </div>
        <div className="border border-dashed my-3"></div>
        <div className="flex flex-wrap gap-5">
            <div className="bg-blue-300 p-3 rounded-full">
                <h6 className="text-blue-500">Category: {category}</h6>
            </div>
            <div className="bg-orange-200 p-3 rounded-full">
                <h6 className="text-orange-500">Rating: {rating}</h6>
            </div>
            <div>
                <Link><button className="btn bg-green-400 rounded-full text-white">View Details</button></Link>
            </div>
        </div>
    </div>
</div>

        // <div className="flex gap-5 p-5 rounded-xl border-slate-100 border-2">
        //     <div className="bg-slate-200 px-16 py-8 rounded-2xl">
        //         <img src={image} alt="" />
        //     </div>
        //     <div className="flex flex-col">
        //         <div>
        //             <h2 className="text-2xl">{bookName}</h2>
        //             <p>By :{author}</p>
        //         </div>
        //         <div className="flex flex-wrap mt-2 items-center">
        //             <p>Tag:</p>
        //             {tags.map((tag, index) => (
        //                 <span key={index} className="inline-block  text-green-500  px-3  text-sm font-semibold mr-2 my-2">
        //                     {tag}
        //                 </span>
        //             ))}
        //         </div>
        //         <div className="flex gap-10">
        //             <div className="flex gap-2">
        //                 <GoPeople />
        //                 Publisher : {publisher}
        //             </div>
        //             <div className="flex gap-2">
        //                 <GoPeople />
        //                 Pages : {totalPages}
        //             </div>
        //         </div>
        //         <div className="border border-dashed "></div>
        //         <div className="flex gap-5">
        //             <div className="bg-blue-300 p-3 rounded-full">
        //                 <h6 className="text-blue-500">Category :{category}</h6>
        //             </div>
        //             <div className="bg-orange-200 p-3 rounded-full">
        //                 <h6 className="text-orange-500">Rating :{rating}</h6>
        //             </div>
        //             <div>
        //                 <Link><button className="btn bg-green-400 rounded-full text-white">View Details</button></Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Wish;