const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

// Action creator
export const addBook = (newBookToAdd) => ({ type: ADD_BOOK, newBookToAdd });
export const deleteBook = (id) => ({ type: DELETE_BOOK, id });

const initialState = [
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
];

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
