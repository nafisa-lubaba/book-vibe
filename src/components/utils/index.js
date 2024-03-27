import toast from 'react-hot-toast';
export const getBooks = () => {
    let books =[]
    const storeBooks = localStorage.getItem('books')
    if (storeBooks) {
        books = JSON.parse(storeBooks)

    }
    return books
}
export const getWish =() => {
    let wish =[]
    const storeWish = localStorage.getItem('wish')
    if (storeWish){
        wish = JSON.parse(storeWish)
    }
    return wish

}

export const saveBooks = book => {
    let books = getBooks()
    const isExit = books.find(b => b.bookId === book.bookId)
    if (isExit) {
        return toast.error('you have already read')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('add in booklist')

}

export const saveWish = book =>{
    let wish = getWish()
    let read = getBooks()

    const isRead = read.find(b => b.bookId === book.bookId)
    if (isRead) {
        return toast.error('you have already add in readlist')
    }


    const isExit = wish.find(w=> w.bookId === book.bookId)
    if(isExit){
        return toast.error('you have add in wishlist')
    }
    wish.push(book)
    localStorage.setItem('wish', JSON.stringify(wish))
    toast.success('add in wishlistss')


}
