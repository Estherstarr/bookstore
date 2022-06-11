// create action
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Action creator
export const checkStatus = () => ({ type: CHECK_STATUS });

// Reducer logic
const categoryReducer = (state = [], action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export default categoryReducer;
