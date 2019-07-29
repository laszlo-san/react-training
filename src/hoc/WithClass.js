import React from "react";

const withClass = porps => (
  <div classname={porps.classes}>{porps.children}</div>
);

export default withClass;
