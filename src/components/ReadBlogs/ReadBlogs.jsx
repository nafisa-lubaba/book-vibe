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
        <div>
            <h1>Read Books:{books.length}</h1>
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
