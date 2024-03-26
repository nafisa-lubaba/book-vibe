import { useLoaderData, useParams } from 'react-router-dom'
  import 'react-toastify/dist/ReactToastify.css';
import { saveBooks } from '../utils';
  const handleRead = book=>{
    saveBooks(book)
    console.log('you have already read')
  }

const BookInfo = () => {
    const books = useLoaderData()
    const { bookId } = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt)
    console.log(book)
    return (
        <div className='mx-auto w-[90%] h-[20%]'>
            <h2>book detalis:{bookId}</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{book.bookName}</h1>
                        <p className="py-6">{book.author}</p>
                        <p className="py-6"><span className='font-bold'>Review</span>{book.review}</p>
                        <div className='flex justify-between mb-3'>
                            {Array.isArray(book.tags) && (
                                <>

                                    <div className="flex gap-10"> Tags:
                                        {book.tags.map((tag, idx) => (
                                            <p className="text-green-500" key={idx}>#{tag}</p>
                                        ))}

                                    </div>
                                </>
                            )}


                        </div>

                        <hr className='border-dotted my-2' />
                        <div>
                            <p className=''>name of pages:    {book.totalPages}</p>
                            <p className=''>name of pages:    {book.publisher}</p>
                            <p className=''>name of pages:    {book.yearOfPublishing}</p>
                            <p className=''>name of pages:    {book.rating}</p>
                        </div>

                      <div className=''>
                      <button onClick={() =>handleRead(book)} className="btn bg-white border border-gray-500">Read</button>
                        <button className="btn bg-[#50B1C9] ml-4">Wishlist</button>
                        
                      </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookInfo;