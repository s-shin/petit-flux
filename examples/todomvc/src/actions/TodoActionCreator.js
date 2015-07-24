import T from "../constants/TodoConstants";

export function load() {
  return [T.TODO_LOAD, null];
}

export function create(text) {
  return [T.TODO_CREATE, text];
}

export function toggleCompleted(todoId) {
  return [T.TODO_TOGGLE_COMPLETED, todoId];
}

export function toggleCompletedAll() {
  return [T.TODO_TOGGLE_COMPLETED_ALL, null];
}

export function destroy(todoId) {
  return [T.TODO_DESTROY, todoId];
}

export function edit(todoId, text) {
  return [T.TODO_EDIT, {todoId, text}];
}

export function clearCompleted() {
  return [T.TODO_CLEAR_COMPLETED, null];
}
