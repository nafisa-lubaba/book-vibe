import { useEffect, useState } from 'react';
import {  } from 'react-router-dom';
import { getBooks } from '../utils';
import Read from '../Read/Read';

const ReadBlogs = () => {
    const [books, setBooks] = useState([])
    useEffect ( () =>{
        const booked = getBooks()
        setBooks(booked)
    }
        ,[])
     

    return (
        <div className=''>
          
            {
                books.map(book => <Read
                    key={book.bookId}
                    book={book}
                   
                ></Read>)
            }
            
        </div>
    );
};

export default ReadBlogs;
