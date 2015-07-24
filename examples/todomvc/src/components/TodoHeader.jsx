import React from "react";
import Key from "../constants/Key";
import context from "../context";

export default class TodoHeader extends React.Component {

  handleKeyPress(e) {
    if (e.key !== Key.ENTER) {
      return;
    }
    e.preventDefault();
    const text = e.target.value.trim();
    if (text.length > 0) {
      context.actions.todo.create(text);
      e.target.value = "";
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onKeyPress={this.handleKeyPress}
        />
      </header>
    );
  }
}
