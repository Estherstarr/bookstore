import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, deleteBook }) => (
  <>
    <h3>{title}</h3>
    <h4>{author}</h4>
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
