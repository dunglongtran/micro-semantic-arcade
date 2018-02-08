import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Segment, Card, Image, Icon,Rail ,Label} from "semantic-ui-react";

//@Mock
const uri =
  "http://tiguandesign.com/demos/jumbo/wp-content/uploads/2016/07/watch_dogs_24-wallpaper-1920x1080-658x401.jpg";
export default class HomeBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const [first, ...remain] = this.props.items;
    return (
      <Grid columns={3} fluid>
        <Grid.Column stretched width={8}>
          <Card fluid>
            <Image src={uri} fluid />
            <Rail internal position='left'>
              <Segment>Left Rail Content</Segment>
            </Rail>

          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card fluid>
            <Image src={uri} fluid />
          </Card>
          <Card fluid>
            <Image src={uri} fluid />
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card fluid>
            <Image src={uri} fluid />
          </Card>
          <Card fluid>
            <Image src={uri} fluid />
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

HomeBlock.propTypes = {
  items: PropTypes.array.isRequired,
  alignItem: PropTypes.oneOf(["left", "right"]).isRequired
};
HomeBlock.defaultProps = {
  items: [],
  alignItem: "left"
};
