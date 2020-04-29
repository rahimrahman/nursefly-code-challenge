import React from "react";
import { connect } from "react-redux";

import Books from "../components/Books";
import { updateFavorites } from "../actions/users";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookIds: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.favoriteBooks !== state.prevFavoriteBooks) {
      const bookIds = props.favoriteBooks.map((book) => book.id);
      return {
        bookIds,
        prevFavoriteBooks: props.favoriteBooks,
      };
    }
    return null;
  }

  handleFavoriteButtonClick = (book) => {
    this.props.updateFavorites(book, this.state.bookIds);
  };

  render() {
    return (
      <>
        <h2>User</h2>
        <Books
          handleFavoriteButtonClick={this.handleFavoriteButtonClick}
          bookIds={this.state.bookIds}
          books={this.props.favoriteBooks}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    favoriteBooks: users.favoriteBooks,
  };
};

const ConnectedUsers = connect(mapStateToProps, { updateFavorites })(Users);
export default ConnectedUsers;
