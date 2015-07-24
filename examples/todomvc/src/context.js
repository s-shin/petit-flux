import {Context} from "petit-flux";
import * as TodoActionCreator from "./actions/TodoActionCreator";
import TodoStore from "./stores/TodoStore";

const context = new Context();
context.registerActionCreator("todo", TodoActionCreator);
context.registerStore("todo", new TodoStore());

export default context;
