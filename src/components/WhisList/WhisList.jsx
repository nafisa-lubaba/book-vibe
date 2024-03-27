import { useEffect, useState } from "react";
import { getWish } from "../utils";
import Wish from "../Wish/Wish";


const WhisList = () => {
    const [wishs, setwishs] = useState([])
    useEffect ( () =>{
        const wished = getWish()
        setwishs(wished)
    }
        ,[])
     
    return (
        <div>
            
            {
                wishs.map(books => <Wish
                    key={books.bookId}
                    books={books}
                   
                ></Wish>)
            }

            
        </div>
    );
};

export default WhisList;