import toast from 'react-hot-toast';
export const getBooks = () => {
    let books =[]
    const storeBooks = localStorage.getItem('books')
    if (storeBooks) {
        books = JSON.parse(storeBooks)

    }
    return books
}

export const saveBooks = book => {
    let books = getBooks()
    const isExit = books.find(b => b.bookId === book.bookId)
    if (isExit) {
        return toast.error('you have already read')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('add in wishlist')

}
