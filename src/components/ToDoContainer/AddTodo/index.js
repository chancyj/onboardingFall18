import React, { Component } from "react";
import { SubmitButton, Container, Input } from "./styles";

class AddTodo extends Component {
  render() {
    return (
      /* When the user clicks submit, call the addTodo func */
      <Container>
        <form onSubmit={this.props.addTodo}>
          <Input
            value={this.props.currentText}
            onChange={this.props.handleInput}
          />
          <SubmitButton type="submit" onClick={this.props.addTodo}>
            Add
          </SubmitButton>
        </form>
      </Container>
    );
  }
}

export default AddTodo;
