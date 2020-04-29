import { BOOK_ACTIONS } from "../actions/books";

const INITIAL_STATE = {
  searchText: "",
  searchResult: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOK_ACTIONS.SEARCH_TEXT_UPDATE: {
      const { searchText } = action.payload;
      return {
        ...state,
        searchText,
      };
    }
    case BOOK_ACTIONS.SEARCH_SUCCESSFUL: {
      const { searchText, searchResult } = action.payload;
      return {
        ...state,
        searchText,
        searchResult,
      };
    }
    default:
      return state;
  }
};
