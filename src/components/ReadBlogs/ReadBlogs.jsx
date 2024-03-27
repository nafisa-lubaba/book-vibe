import { useEffect, useState } from 'react';
import { } from 'react-router-dom';
import { getBooks } from '../utils';
import Read from '../Read/Read';

const ReadBlogs = () => {
    const [books, setBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const handleBookFilter = filter => {
        let sortBooks = [...books];
        if (filter === "rating") {
            sortBooks.sort((a, b) => b.rating - a.rating);

        }
        else if (filter === "totalPages") {
            sortBooks.sort((a, b) => b.totalPages - a.totalPages);

        } else if (filter === "yearOfPublishing") {
            sortBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

        }
        setDisplayBooks(sortBooks);
    }
    useEffect(() => {
        const booked = getBooks()
        setBooks(booked)
        setDisplayBooks(booked)
    }
        , [])


    return (
        <div className=''>
            <div className='text-center'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() =>handleBookFilter('rating')}><a>Rating</a></li>
                        <li  onClick={() =>handleBookFilter('totalPages')}><a>Total number of pages</a></li>
                        <li  onClick={() =>handleBookFilter('yearOfPublishing')}><a>Year Of PubLISH</a></li>
                    </ul>
                </div>
            </div>


            <div>
                {
                    displayBooks.map(book => <Read
                        key={book.bookId}
                        book={book}

                    ></Read>)
                }
            </div>

        </div>
    );
};

export default ReadBlogs;
