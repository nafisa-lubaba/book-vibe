import { FaRegStar } from "react-icons/fa";

const BookDetails = ({ book }) => {
    const { image, bookName, author, category, rating, tags } = book;
    return (
        <div className='card bg-base-100 shadow-xl rounded-lg border border-gray-200'>

            <figure className=''>
                <img className='rounded-xl px-5 pt-5' src={image} alt={`image for the recipe_name
             ${bookName}`} />
            </figure>
            <div className='card-body'>
                <div className='flex justify-between mb-3'>

                    <p className='ml-2 text-green-400'>{tags}</p>

                    <button className='text-xl text-green-400'><FaRegStar /></button>
                    <p className='ml-2'>{rating}</p>

                </div>
                <h1 className='text-xl font-bold'>{bookName}</h1>
                <p className='text-[#878787]'>by:{author}  </p>
                <hr className='border-dotted my-2' />
                <div className='flex justify-between mb-3'>

                    <p className='ml-2'>{category}</p>

                    <button className='text-xl'><FaRegStar /></button>
                    <p className='ml-2'>{rating}</p>

                </div>


            </div>


        </div>




    );
};

export default BookDetails;