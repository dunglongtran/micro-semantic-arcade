import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Segment,
  Card,
  Image,
  Icon,
  Rail,
  Label
} from "semantic-ui-react";

export default class GridListBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const [first, second, third, fourth, fiveth, ...rest] = this.props.items;

    console.log(this.props);
    return (
      <Grid columns={3} fluid={true}>
        <Grid.Column stretched width={8}>
          <Card fluid>
            <Image src={first.thumbs[0]} fluid />
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card fluid>
            <Image src={second.thumbs[0]} fluid />
          </Card>
          <Card fluid>
            <Image src={third.thumbs[0]} fluid />
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card fluid>
            <Image src={fourth.thumbs[0]} fluid />
          </Card>
          <Card fluid>
            <Image src={fiveth.thumbs[0]} fluid />
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

GridListBlock.propTypes = {
  items: PropTypes.array.isRequired,
  alignItem: PropTypes.oneOf(["left", "right"]).isRequired
};
GridListBlock.defaultProps = {
  items: [],
  alignItem: "left"
};
