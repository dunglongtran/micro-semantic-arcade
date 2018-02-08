import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import Block from "../components/home-block/";
import GridListBlock from "../components/grid-list-block/";
import { ITEMS } from "../common/data.mock";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Block items={ITEMS} />
        <GridListBlock items={ITEMS} />
      </Container>
    );
  }
};