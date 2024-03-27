import { useLoaderData, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks, saveWish } from '../utils';
const handleRead = book => {
  saveBooks(book)
  console.log('you have already read')
}
const handleWish = book => {
  saveWish(book)
  console.log('you have already in wishlist')
}

const BookInfo = () => {
  const books = useLoaderData()
  const { bookId } = useParams()
  const idInt = parseInt(bookId)
  const book = books.find(book => book.bookId === idInt)
  console.log(book)
  return (
    <div className='mx-auto w-[90%] gap-5'>

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content gap-10  flex flex-col lg:flex-row lg:justify-center">
          <img src={book.image} className="lg:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className=" text-3xl font-bold lg:text-5xl lg:font-bold">{book.bookName}</h1>
            <p className="py-6">{book.author}</p>
            <p className="py-6"><span className='font-bold'>Review:</span>{book.review}</p>
            <div className='flex justify-between mb-3'>
              {Array.isArray(book.tags) && (
                <>

                  <div className="flex gap-10"> <span className='font-semibold'>Tags:</span>
                    {book.tags.map((tag, idx) => (
                      <p className="text-green-500" key={idx}>#{tag}</p>
                    ))}

                  </div>
                </>
              )}


            </div>

            <hr className='border-dotted my-2' />
            <div className='mb-3'>
              <p className=''>name of pages:  <span className='font-semibold ml-3'>  {book.totalPages}</span></p>
              <p className=''>name of pages:  <span className='font-semibold ml-3'> {book.publisher}</span></p>
              <p className=''>name of pages:    <span className='font-semibold ml-3'>{book.yearOfPublishing}</span></p>
              <p className=''>name of pages:  <span className='font-semibold ml-3'> {book.rating}</span></p>
            </div>

            <div className=''>
              <button onClick={() => handleRead(book)} className="btn bg-white border border-gray-500">Read</button>
              <button onClick={() => handleWish(book)} className="btn bg-[#50B1C9] ml-4">Wishlist</button>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default BookInfo;