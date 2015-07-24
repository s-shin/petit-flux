import React from "react";
import context from "../context";
import _ from "lodash";

export default class TodoMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editingTodoId: null,
    };
  }

  toggleCompleted(todo) {
    context.actions.todo.toggleCompleted(todo.id);
  }

  toggleCompletedAll() {
    context.actions.todo.toggleCompletedAll();
  }

  destroy(todo) {
    context.actions.todo.destroy(todo.id);
  }

  editBegin(todo) {
    this.setState({
      editingTodoId: todo.id
    });
  }

  editEnd(todo, e) {
    context.actions.todo.edit(todo.id, e.target.value);
    this.setState({
      editingTodoId: null
    });
  }

  render() {
    const entries = _.map(this.props.todos, (todo) => {
      const isEditing = this.state.editingTodoId === todo.id;
      return (
        <li className={() => {
          if (isEditing) {
            return "editing";
          }
          if (todo.completed) {
            return "completed";
          }
          return "";
        }()} key={todo.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={this.toggleCompleted.bind(this, todo)}
            />
            <label onDoubleClick={this.editBegin.bind(this, todo)}>{todo.text}</label>
            <button className="destroy" onClick={this.destroy.bind(this, todo)}></button>
          </div>
          {() => {
            if (isEditing) {
              return (
                <input
                  className="edit"
                  defaultValue={todo.text}
                  onBlur={this.editEnd.bind(this, todo)}
                  autoFocus={true}
                />
              );
            }
          }()}
        </li>
      );
    });
    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          defaultChecked={this.props.numNotCompleted === 0}
          onClick={this.toggleCompletedAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {entries}
        </ul>
      </section>
    );
  }

}
