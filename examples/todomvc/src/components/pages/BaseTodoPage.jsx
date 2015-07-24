import React from "react";
import {CompositeDisposable} from "petit-flux";
import TodoHeader from "../TodoHeader";
import TodoMain from "../TodoMain";
import TodoFooter from "../TodoFooter";
import context from "../../context";

export default class BaseTodoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      numCompleted: 0,
      numNotCompleted: 0
    };
    this.subscribes = new CompositeDisposable();
  }

  componentDidMount() {
    this.subscribes.add(context.stores.todo.onChange((store) => {
      this.setState({
        todos: store.getTodos(),
        numCompleted: store.getNumCompleted(),
        numNotCompleted: store.getNumNotCompleted()
      });
    }));
    context.actions.todo.load();
  }

  componentWillUnmount() {
    this.subscribes.dispose();
  }

  getFilter() {
    throw new Error("abstract method");
  }

  getRenderedTodos() {
    throw new Error("abstract method");
  }

  render() {
    return (
      <section className="todoapp">
        <TodoHeader />
        <TodoMain todos={this.getRenderedTodos()} areAllCompleted={this.state.numNotCompleted > 0} />
        <TodoFooter filter={this.getFilter()} numNotCompleted={this.state.numNotCompleted} numCompleted={this.state.numCompleted} />
      </section>
    );
  }

}
