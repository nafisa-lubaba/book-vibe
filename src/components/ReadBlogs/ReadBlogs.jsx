import { useEffect, useState } from 'react';
import {  } from 'react-router-dom';
import { getBooks } from '../utils';

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
            
        </div>
    );
};

export default ReadBlogs;
