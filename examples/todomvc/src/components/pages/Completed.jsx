import _ from "lodash";
import BaseTodoPage from "./BaseTodoPage";

export default class Completed extends BaseTodoPage {

  getFilter() {
    return "completed";
  }

  getRenderedTodos() {
    return _.filter(this.state.todos, "completed");
  }

}
