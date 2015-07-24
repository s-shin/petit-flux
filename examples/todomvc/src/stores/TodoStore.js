import T from "../constants/TodoConstants";
import _ from "lodash";

const storage = {
  KEY: "todos-petit-flux",
  data: {},
  generateId() {
    this.data.id++;
    this.persist();
    return this.data.id;
  },
  init() {
    this.data = {id: 0, todos: {}};
    this.persist();
  },
  persist() {
    localStorage[this.KEY] = JSON.stringify(this.data);
  },
  prepare() {
    this.data = JSON.parse(localStorage[this.KEY]) || {};
  }
};

export default class TodoStore {

  constructor() {
    // storage.init();
  }

  setup(onAction, emitChange) {
    onAction(T.TODO_LOAD, () => {
      storage.prepare();
      emitChange();
    });
    onAction(T.TODO_CREATE, (text) => {
      const id = storage.generateId();
      storage.data.todos[id] = {id, text, completed: false};
      storage.persist();
      emitChange();
    });
    onAction(T.TODO_TOGGLE_COMPLETED, (todoId) => {
      storage.data.todos[todoId].completed = !storage.data.todos[todoId].completed;
      storage.persist();
      emitChange();
    });
    onAction(T.TODO_TOGGLE_COMPLETED_ALL, () => {
      const completed = this.areAllCompleted();
      _.forEach(storage.data.todos, (todo) => {
        todo.completed = !completed;
      });
      storage.persist();
      emitChange();
    });
    onAction(T.TODO_DESTROY, (todoId) => {
      delete storage.data.todos[todoId];
      storage.persist();
      emitChange();
    });
    onAction(T.TODO_EDIT, ({todoId, text}) => {
      storage.data.todos[todoId].text = text;
      storage.persist();
      emitChange();
    });
    onAction(T.TODO_CLEAR_COMPLETED, () => {
      _.forEach(storage.data.todos, (todo) => {
        if (todo.completed) {
          delete storage.data.todos[todo.id];
        }
      });
      storage.persist();
      emitChange();
    });
  }

  getTodos() {
    return storage.data.todos;
  }

  areAllCompleted() {
    return _.every(storage.data.todos, "completed");
  }

  getNumNotCompleted() {
    return _.reduce(storage.data.todos, (num, todo) => num + (todo.completed ? 0 : 1), 0);
  }

  getNumCompleted() {
    return _.reduce(storage.data.todos, (num, todo) => num + (todo.completed ? 1 : 0), 0);
  }

}
