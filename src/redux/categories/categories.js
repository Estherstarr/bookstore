// create action
const CHECK_STATUS = 'CHECK_STATUS';

// Action creator
export const checkStatus = () => ({ type: CHECK_STATUS });

// Reducer logic
const categoryReducer = (state = 'Under Constructor') => state;

export default categoryReducer;
