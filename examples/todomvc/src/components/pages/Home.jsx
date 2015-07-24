import BaseTodoPage from "./BaseTodoPage";

export default class Home extends BaseTodoPage {

  getFilter() {
    return "all";
  }

  getRenderedTodos() {
    return this.state.todos;
  }

}
