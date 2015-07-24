import EventEmitter from "eventemitter3";
import {Disposable} from "disposables";
import _ from "lodash";
import Action from "./action";

export default class Context {

  constructor() {
    this.actionEmitter = new EventEmitter();
    this.storeEmitter = new EventEmitter();
    this.actions = {};
    this.stores = {};
  }

  registerActionCreator(name, actionCreator) {
    _.forEach(actionCreator, (makeAction, key) => {
      this.actions[name] = this.actions[name] || {};
      this.actions[name][key] = (...args) => {
        Promise
          .resolve(makeAction(...args))
          .then((source) => {
            const action = Action.make(source);
            this.actionEmitter.emit(action.name, action.value);
          })
          .catch((err) => {
            throw err;
          });
      };
    });
  }

  registerStore(name, store) {
    const CHANGE_EVENT = "change";
    this.stores[name] = {
      onChange: (callback) => {
        this.storeEmitter.on(CHANGE_EVENT, callback);
        return new Disposable(() => {
          this.storeEmitter.removeListener(CHANGE_EVENT, callback);
        });
      }
    };
    store.setup(
      (actionName, handler) => {
        this.actionEmitter.on(actionName, handler);
        return new Disposable(() => {
          this.actionEmitter.removeListener(actionName, handler);
        });
      },
      () => {
        this.storeEmitter.emit(CHANGE_EVENT, store);
      }
    );
  }

}
