import assert from "power-assert";
import Context from "../src/context";

describe("Context", () => {

  it("#registerActionCreator", () => {
    const context = new Context();
    context.registerActionCreator("foobar", {
      foo() { return ["foo", 100]; }
    });
    assert(context.actions.foobar.foo);
  });

  it("#registerStore", () => {
    const context = new Context();
    context.registerStore("foobar", {
      setup(onAction, emitChange) {
        assert(onAction);
        assert(emitChange);
      }
    });
    assert(context.stores.foobar);
  });

  it("flux flow", (done) => {
    const context = new Context();
    // constant
    const FOO = "foo";
    // action creator
    context.registerActionCreator("foobar", {
      foo(value) {
        return new Promise((resolve) => {
          // async action
          setTimeout(() => {
            resolve([FOO, value]);
          }, 10);
        });
      }
    });
    // store
    context.registerStore("foobar", {
      setup(onAction, emitChange) {
        onAction(FOO, (value) => {
          this.value = value;
          emitChange();
        });
      }
    });
    // view
    context.stores.foobar.onChange((store) => {
      assert(store.value === 100);
      done();
    });
    context.actions.foobar.foo(100);
  });

});
