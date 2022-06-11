import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const GET_BOOK = 'GET_BOOK';

// Action creator
export const addBook = (newBookToAdd) => ({ type: ADD_BOOK, newBookToAdd });
export const deleteBook = (id) => ({ type: DELETE_BOOK, id });
export const getBook = (payload) => ({ type: GET_BOOK, payload });

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/N14gCXiKekJEuGCIphaC/books';

export const fetchBook = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const books = [];
  Object.entries(data).forEach((book) => {
    books.push({
      item_id: book[0],
      ...book[1][0],
    });
  });
  dispatch(getBook(books));
};

export const postBook = (newBookToAdd) => async (dispatch) => {
  await axios.post(url, newBookToAdd);
  dispatch(addBook(newBookToAdd));
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`);
  dispatch(deleteBook(id));
};

// Reducer logic
const bookReducer = (state = [], action) => {
  if (action.type === ADD_BOOK) {
    return [...state, action.newBookToAdd];
  }

  if (action.type === DELETE_BOOK) {
    return [...state].filter((book) => book.item_id !== action.id);
  }
  if (action.type === GET_BOOK) {
    return action.payload;
  }
  return state;
};

export default bookReducer;
