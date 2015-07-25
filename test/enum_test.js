import assert from "power-assert";
import Enum from "../src/enum";

describe("Enum", () => {

  it("new", () => {
    const foobar = new Enum(["foo", "bar"]);
    assert(foobar.foo === "foo");
    assert(foobar.bar === "bar");
  });

});
