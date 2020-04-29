import PropTypes from "prop-types";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import history from "../history";
import { getBooksByQuery, updateSearchText } from "../actions/books";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class HeaderNavigation extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }
  handleSearchTextChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearchButtonClick = () => {
    this.props.updateSearchText(this.state.searchText);
    this.props.getBooksByQuery(this.state.searchText);
    history.push("/");
  };

  render() {
    return (
      <>
        <Navbar>
          <Navbar.Brand href="#home">NurseFly GoodReads</Navbar.Brand>
          <Nav>
            <Link to="/" className={"nav-link"}>
              Home
            </Link>
            <Link to="/about" className={"nav-link"}>
              About
            </Link>
            <Link to="/users" className={"nav-link"}>
              Users
            </Link>
            <Form inline>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={this.handleSearchTextChange}
              />
              <Button
                variant="outline-info"
                value={this.props.searchText}
                onClick={this.handleSearchButtonClick}
                type={"button"}
              >
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { searchText: state.books.searchText };
};

export default withRouter(
  connect(mapStateToProps, { updateSearchText, getBooksByQuery })(
    HeaderNavigation
  )
);
