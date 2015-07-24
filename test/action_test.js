import assert from "power-assert";
import Action from "../lib/action";

describe("Action", () => {

  function assertFooBarAction(action) {
    assert(action.name === "foo");
    assert(action.value === "bar");
  }

  it("new", () => {
    assertFooBarAction(new Action("foo", "bar"));
  });

  it("#make with name and value", () => {
    assertFooBarAction(Action.make("foo", "bar"));
  });

  it("#make with action", () => {
    assertFooBarAction(Action.make(new Action("foo", "bar")));
  });

  it("#make with tuple", () => {
    assertFooBarAction(Action.make(["foo", "bar"]));
  });

  it("#make with object", () => {
    assertFooBarAction(Action.make({name: "foo", value: "bar"}));
  });

});
