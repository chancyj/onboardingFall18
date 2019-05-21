import React, { Component } from "react";
import AddTodo from "./AddTodo/index.js";
import TodoItems from "./TodoItems/index.js";
import SearchTodos from "./SearchTodos/index.js";
import { Container, Text, SubContainer } from "./styles";

class ToDoContainer extends Component {
  // Set up the state
  constructor() {
    super();
    this.state = {
      items: [], // Will store all the todos and display
      currentText: "", // Todo inputted by user
      currentID: 1,
      searchText: ""
    };
  }

  // Update what the current item is based on user input
  handleInput = item => {
    const todo = item.target.value;
    const currentText = todo;
    this.setState({ currentText });
  };

  // Add an item to the list
  addTodo = obj => {
    obj.preventDefault();

    // Make sure the current item is not empty before adding
    if (this.state.currentText !== "") {
      const items = [
        ...this.state.items,
        {
          id: this.state.currentID + 1,
          text: this.state.currentText,
          status: true
        }
      ];
      this.setState({
        items: items,
        currentText: "", // Reset text the next user input
        currentID: this.state.currentID + 1 // New ID value
      });
    }
  };

  // Delete an item from the list
  deleteTodo = id => {
    // id.preventDefault();

    // Filter to create new array that doesn't include deleted item
    const newList = this.state.items.filter(obj => {
      return obj.id !== id;
    });

    this.setState({
      items: newList
    });
  };

  searchTodos = input => {
    const matches = this.state.items.filter(t => {
      t.text.match(input) !== null ? (t.status = true) : (t.status = false);
      return t;
    });

    this.setState({
      items: matches
    });
  };

  // Handle inputs from search
  handleSearch = text => {
    const item = text.target.value;
    const searchText = item;
    this.setState({ searchText });
    this.searchTodos(item);
  };

  render() {
    return (
      <Container id="root">
        <SubContainer>
          <Text>Current Todos:</Text>
          <TodoItems todos={this.state.items} deleteTodo={this.deleteTodo} />
        </SubContainer>
        <SubContainer>
          <AddTodo
            addTodo={this.addTodo}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentText={this.state.currentText}
          />
          <SearchTodos
            currentText={this.state.searchText}
            handleSearch={this.handleSearch}
          />
        </SubContainer>
      </Container>
    );
  }
}

export default ToDoContainer;
