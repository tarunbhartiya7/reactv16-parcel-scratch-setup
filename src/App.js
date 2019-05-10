import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// class or stateful component
class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return React.createElement("div", { id: "my-id" }, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

// We can say that App is a class and below line creates an instance of this class
render(React.createElement(App), document.getElementById("root"));
