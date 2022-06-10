import React, { useState } from 'react';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      author: 'Author 1',
      title: 'Title 1',
      category: 'Category 1',
    },
    {
      id: 2,
      author: 'Author 2',
      title: 'Title 2',
      category: 'Category 2',
    },
  ]);

  const addNewBook = (newBook) => {
    setBooks((prevBook) => [...prevBook, newBook]);
  };

  const deleteBook = (id) => {
    setBooks([...books].filter((item) => item.id !== id));
  };

  return (
    <>
      <AddBook addNewBook={addNewBook} />
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          deleteBook={() => deleteBook(book.id)}
        />
      ))}
    </>
  );
};

export default Books;
