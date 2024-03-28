import { useEffect, useState } from "react";
import BookDetails from "../BookDetails/BookDetails";



const Books = () => {
    //     const books = useLoaderData();
    //     console.log(books)

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="font-bold  text-5xl text-center mt-10 mb-5">Books</h2>

            </div>
            <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
                {
                    books.map(book => <BookDetails key={book.bookId} book={book}></BookDetails>)

                }
            </div>
        </div>
    );
}



export default Books;