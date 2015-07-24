import React from "react";
import {Link} from "react-router";
import context from "../context";

export default class TodoFooter extends React.Component {
  
  clearCompleted() {
    context.actions.todo.clearCompleted();
  }

  selectedIfFilterIs(filter) {
    return this.props.filter === filter ? "selected" : "";
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.props.numNotCompleted}</strong> item left</span>
        <ul className="filters">
          <li>
            <Link to="home" className={this.selectedIfFilterIs("all")} href="/">All</Link>
          </li>
          <li>
            <Link to="active" className={this.selectedIfFilterIs("active")} href="/active">Active</Link>
          </li>
          <li>
            <Link to="completed" className={this.selectedIfFilterIs("completed")} href="/completed">Completed</Link>
          </li>
        </ul>
        {() => {
          if (this.props.numCompleted > 0) {
            return <button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>;
          }
        }()}
      </footer>
    );
  }

}

TodoFooter.propTypes = {
  filter: React.PropTypes.oneOf(["all", "active", "completed"]),
  numCompleted: React.PropTypes.number.isRequired,
  numNotCompleted: React.PropTypes.number.isRequired
};
