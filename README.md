# Petit Flux

Simple & Tiny Flux Framework.

[![Build Status](https://travis-ci.org/s-shin/petit-flux.svg)](https://travis-ci.org/s-shin/petit-flux)
[![license](https://img.shields.io/github/license/s-shin/isoproxy.svg)](https://github.com/s-shin/isoproxy/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/petit-flux.svg)](https://nodei.co/npm/petit-flux/)

## Install

```sh
npm install petit-flux --save
```

## Basic Usage

`Context` is the core of this framework.

```js
import {Context} from "petit-flux";

const context = new Context();

// constants
const RESULT = "result";

// action creators
context.registerActionCreator("math", {
  add(x, y) {
    return [RESULT, x + y];
  },
  sub(x, y) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([RESULT, x + y]);
      }, 100)
    });
  }
});

// stores
context.registerStore("result", {
  setup(onAction, emitChange) {
    onAction(RESULT, (value) => {
      this.value = value;
      emitChange();
    });
  },
  getValue() {
    return this.value;
  }
});

// views
context.stores.result.onChange((store) => {
  console.log(store.getValue()); // will be 300
  // this.setStore({store}) etc.
});
context.actions.math.add(100, 200);
```

## Advanced Usage

`Enum` is the utility class just like [keyMirror](https://github.com/facebook/react/blob/v0.13.3/src/vendor/key-mirror/keyMirror.js).

```js
import {Enum} from "petit-flux";
const foobar = new Enum(["foo", "BAR"]);
assert(foobar.foo === "foo");
assert(foobar.BAR === "BAR");
```

An action creator is a plain object contains only functions.

```js
// math.js
export function add(x, y) {
  return [RESULT, x + y];
}

// context.js
import * as MathActionCreator from "./math";
context.registerActionCreator("math", MathActionCreator);
```

Each creator can return a value of variable styles.

```js
export function add(x, y) {
  // Promise when async.
  return new Promise((resolve) => {
    // tuple
    resolve([RESULT, x + y]);
    // If reject(error), the error is simply thrown internally.
  });
}

export function sub(x, y) {
  // object
  return {name: RESULT, value: x + y};
}

import Action from "petit-flux";

export function mul(x, y) {
  // Action instance
  return new Action(RESULT, x + y);
}

export function div(x, y) {
  // The return value is passed to Action.make() internally.
  return Action.make(RESULT, x + y);
}
```

Some classes of dependent libraries are also exported.

```js
import {
  // https://github.com/gaearon/disposables
  Disposable, CompositeDisposable,
  // https://github.com/primus/eventemitter3
  EventEmitter
} from "petit-flux";
```

## Examples

* [TodoMVC by Petit Flux](examples/todomvc)
  * http://s-shin.github.io/petit-flux/examples/todomvc/

## License

The MIT License.
