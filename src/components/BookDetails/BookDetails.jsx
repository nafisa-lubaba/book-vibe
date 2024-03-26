import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom"

const BookDetails = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className='card bg-base-100 shadow-xl rounded-lg border border-gray-200'>

                <figure className=''>
                    <img className='rounded-xl px-5 pt-5' src={image} alt={`image for the recipe_name
 ${bookName}`} />
                </figure>
                <div className='card-body'>
                    <div className='flex justify-between mb-3'>
                    {Array.isArray(tags) && (
                        <>
                        
                            <div className="flex gap-10">
                                {tags.map((tag, idx) => (
                                    <p className="text-green-500" key={idx}>{tag}</p>
                                ))}
                            </div>
                        </>
                    )}

                    </div>
                    <h1 className='text-xl font-bold'>{bookName}</h1>
                    <p className="gap-3">By:{author}</p>
                   
                    <hr className='border-dotted my-2' />
                    <div className='flex justify-between mb-3'>

                        <p className='ml-2'>{category}</p>

                        <button className='text-xl'><FaRegStar /></button>
                        <p className='ml-2'>{rating}</p>

                    </div>


                </div>


            </div>
        </Link>




    );
};

export default BookDetails;