import PropTypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";

export default class Books extends React.PureComponent {
  static propTypes = {
    bookIds: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    handleFavoriteButtonClick: PropTypes.func.isRequired,
  };

  renderPagination = () => {
    if (!this.props.books.length) {
      return undefined;
    }
    return (
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
  };

  renderBooks = () => {
    if (!this.props.books.length) {
      return undefined;
    }

    return this.props.books.map((book) => this.renderBook(book));
  };

  renderBook = (book) => {
    const bookExists = this.props.bookIds.find((id) => id === book.id);
    return (
      <Row key={book.id} style={styles.bookRowStyle}>
        <Col>
          <Image src={`${book.imageLinks.thumbnail}/200px370`} thumbnail />
        </Col>
        <Col xs={10}>
          <h4>{book.title}</h4>
          <div>{book.authors ? book.authors.join(", ") : ""}</div>
          <div>
            <Button
              variant={bookExists ? "outline-primary" : "primary"}
              size={"sm"}
              onClick={() => this.props.handleFavoriteButtonClick(book)}
            >
              {bookExists ? "Remove" : "Add to Favorite"}
            </Button>
          </div>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <>
        {this.renderBooks()}
        {this.renderPagination()}
      </>
    );
  }
}

const styles = {
  bookRowStyle: {
    padding: 10,
  },
};
