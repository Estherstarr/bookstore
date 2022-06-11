import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const titleRef = useRef();
  const authorRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: titleRef.current.value,
      author: authorRef.current.value,
      category: 'category',
    };
    dispatch(postBook(newBook));
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

export default AddBook;
