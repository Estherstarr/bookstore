import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addNewBook }) => {
  const titleRef = useRef();
  const authorRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: 3,
      title: titleRef.current.value,
      author: authorRef.current.value,
      category: 'category',
    };
    addNewBook(newBook);
    titleRef.current.value = '';
    authorRef.current.value = '';
  };

  return (
    <div id="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input ref={titleRef} type="text" name="title" placeholder="Title" />
        <input ref={authorRef} type="text" name="author" placeholder="Author" />
        <button type="submit" id="add-book">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

export default AddBook;
