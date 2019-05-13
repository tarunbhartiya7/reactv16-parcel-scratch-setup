import React from "react";
import Pet from "./Pet";

// class or stateful component
export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breed/hound/images")
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets.message.slice() }));
  }
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    // return React.createElement("div", { id: "my-id" }, [
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "Dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Pepper",
    //     animal: "Bird",
    //     breed: "Cockatiel"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Doink",
    //     animal: "Cat",
    //     breed: "Mixed"
    //   })
    // ]);
    return (
      /* <pre>
          <code>{JSON.stringify(this.state.pets, null, 4)}</code>
        </pre> */
      <div className="search">
        {this.state.pets.map(pet => {
          return (
            <Pet id={1} key={pet} imageUrl={pet} animal="Dog" breed="hound" />
          );
        })}
      </div>
    );
  }
}
