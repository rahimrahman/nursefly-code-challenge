import { getBooks } from "../api/books";

export const BOOK_ACTIONS = {
  SEARCH_TEXT_UPDATE: "search_text_update",
  SEARCH_SUCCESSFUL: "search_successful",
};

export const updateSearchText = (searchText) => ({
  type: BOOK_ACTIONS.SEARCH_TEXT_UPDATE,
  payload: {
    searchText,
  },
});

export const getBooksByQuery = (searchText) => {
  return async (dispatch) => {
    const searchResult = await getBooks(searchText);
    // const searchResult = [
    //   {
    //     id: "ABC",
    //     title: "Hello World",
    //     authors: ["Rahim Rahman", "Elizabeth Brogan"],
    //     description: "Description",
    //     imageLinks: {
    //       thumbnail: "https://i.stack.imgur.com/mwFzF.png"
    //     }
    //   }
    // ];

    dispatch({
      type: BOOK_ACTIONS.SEARCH_SUCCESSFUL,
      payload: {
        searchText,
        searchResult,
      },
    });
  };
};
