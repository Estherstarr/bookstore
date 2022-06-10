const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

// Action creator
export const addBook = (newBookToAdd) => ({ type: ADD_BOOK, newBookToAdd });
export const deleteBook = (id) => ({ type: DELETE_BOOK, id });

const initialState = [];

// Reducer logic
const bookReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOK) {
    return [...state, action.newBookToAdd];
  }

  if (action.type === DELETE_BOOK) {
    return [...state].filter((book) => book.id !== action.id);
  }
  return state;
};

export default bookReducer;
