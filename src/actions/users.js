export const USER_ACTIONS = {
  ADD_BOOK: "user_add_book",
  REMOVE_BOOK: "user_remove_book",
};

export const updateFavorites = (book, bookIds) => {
  const bookIndex = bookIds.findIndex((bookId) => bookId === book.id);
  let actions = {
    type: USER_ACTIONS.ADD_BOOK,
    payload: {
      book,
    },
  };

  if (bookIndex !== -1) {
    actions = {
      type: USER_ACTIONS.REMOVE_BOOK,
      payload: {
        bookIndex,
      },
    };
  }
  return actions;
};
