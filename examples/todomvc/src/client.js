import React from "react";
import ReactRouter from "react-router";
import routes from "./routes";

ReactRouter.run(routes, ReactRouter.HashLocation, (Root) => {
  React.render(
    React.createElement(Root),
    document.querySelector(".js-container")
  );
});
