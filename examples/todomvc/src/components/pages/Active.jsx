import _ from "lodash";
import BaseTodoPage from "./BaseTodoPage";

export default class Active extends BaseTodoPage {

  getFilter() {
    return "active";
  }

  getRenderedTodos() {
    return _.reject(this.state.todos, "completed");
  }

}
