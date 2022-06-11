import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, deleteBook }) => (
  <>
    <h2>{title}</h2>
    <h5>{author}</h5>
    <button type="button" onClick={deleteBook}>Delete</button>
  </>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  deleteBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  title: '',
  author: '',
};
export default Book;
