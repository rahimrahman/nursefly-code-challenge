import PropTypes from "prop-types";
import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";

import { getBooksByQuery, updateFavorites, updateSearchText } from "../actions";
import Books from "../components/Books";

class Home extends React.Component {
  typingTimeout = null;

  static propTypes = {
    favoriteBooks: PropTypes.array.isRequired,
    searchText: PropTypes.string,
  };

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

  constructor(props) {
    super(props);

    this.state = {
      bookIds: [],
    };
  }

  handleFavoriteButtonClick = (book) => {
    this.props.updateFavorites(book, this.state.bookIds);
  };

  handleSearchTextChange = (e) => {
    clearTimeout(this.typingTimeout);
    const theText = e.target.value;
    this.props.updateSearchText(theText);
    this.typingTimeout = setTimeout(() => {
      this.props.getBooksByQuery(theText);
    }, 1000);
  };

  render() {
    return (
      <>
        <h2>Search</h2>
        <Row>
          <Form.Control
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={this.props.searchText}
            onChange={this.handleSearchTextChange}
          />
        </Row>
        <Books
          handleFavoriteButtonClick={this.handleFavoriteButtonClick}
          bookIds={this.state.bookIds}
          books={this.props.searchResult}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { books, users } = state;
  const { searchText, searchResult } = books;
  const { favoriteBooks } = users;
  return { searchText, searchResult, favoriteBooks };
};

const ConnectedHome = connect(mapStateToProps, {
  updateFavorites,
  getBooksByQuery,
  updateSearchText,
})(Home);

export default ConnectedHome;
