import React, { Component } from "react";
import { Input } from "./styles";

class SearchTodos extends Component {
  render() {
    return (
      // <Container>
      <Input
        value={this.props.searchText}
        placeholder="Search Todos"
        onChange={this.props.handleSearch}
      />
      // </Container>
    );
  }
}

export default SearchTodos;
