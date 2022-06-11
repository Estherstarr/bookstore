import { useDispatch, useSelector } from 'react-redux';
import { addBook, deleteBook } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  const addNewBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <AddBook addNewBook={addNewBook} />
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          deleteBook={() => handleDeleteBook(book.id)}
        />
      ))}
    </>
  );
};

export default Books;
