import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";
import Block from "../components/home-block";

//@Mock
const items = [
  {
    name: "Fruita Crush",
    categories: ["puzzle,action, arcade"]
  },
  {
    name: "Assin Creeds",
    categories: ["rpg,action"]
  },
  {
    name: "Plant & Zombie",
    categories: ["puzzle,arcade"]
  },
  {
    name: "Fruita Crush",
    categories: ["puzzle,action, arcade"]
  },
  {
    name: "Candy Crush",
    categories: ["puzzle,action, arcade"]
  },
  {
    name: "Panda Crush",
    categories: ["puzzle,action, arcade"]
  },
];

export default class HomeScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Block items/>
      </Container>
    );
  }
}
