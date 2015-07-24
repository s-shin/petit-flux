import _ from "./lodash";

export default class Action {

  constructor(name, value) {
    this[0] = name;
    this[1] = value;
    this.name = name;
    this.value = value;
  }

  static make(source) {
    if (arguments.length > 2) {
      throw new Error("Invalid arguments.");
    }
    if (arguments.length === 2) {
      return new Action(arguments[0], arguments[1]);
    }
    if (source instanceof Action) {
      return source;
    }
    if (_.isArray(source)) {
      return new Action(source[0], source[1]);
    }
    if (_.isObject(source)) {
      return new Action(source.name, source.value);
    }
  }

}
