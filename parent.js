import React, { Component } from "react";
import { render } from "react-dom";
import { Child } from "./child";
export class Parent extends React.Component {
  state = {
    name: "Chethan",
    initial: "D C"
  };

  render() {
    return (
      <div>
        <p>Name:{this.state.name}</p>

        <Child initial={this.state.initial} />
      </div>
    );
  }
}
