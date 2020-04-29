import { USER_ACTIONS } from "../actions/users";

const INITIAL_STATE = {
  favoriteBooks: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS.ADD_BOOK: {
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload.book],
      };
    }
    case USER_ACTIONS.REMOVE_BOOK: {
      return {
        ...state,
        favoriteBooks: state.favoriteBooks.filter(
          (favorite, index) => index !== action.payload.bookIndex
        ),
      };
    }
    default:
      return state;
  }
};
