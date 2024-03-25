// import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'


const Books = () => {
    const books = useLoaderData();
    console.log(books)

    // const[books, setBooks] = useState([])
    // useEffect(() => {
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => setBooks(data))
    // },[])
    return (
        <div>
           <div>
           <h2 className="font-bold  text-5xl text-center mt-10">Books:{books.length}</h2>
          
           </div>
           <div>
            {
                // books.map(books =>)
            }
           </div>
        </div>
    );
};

export default Books;