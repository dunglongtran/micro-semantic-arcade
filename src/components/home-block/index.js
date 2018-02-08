import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Segment, Card, Image, Icon,Rail ,Label} from "semantic-ui-react";

//@Mock
// const uri =
//   "http://tiguandesign.com/demos/jumbo/wp-content/uploads/2016/07/watch_dogs_24-wallpaper-1920x1080-658x401.jpg";
export default class HomeBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const [first,second, third,fourth,fiveth, ...rest] = this.props.items;
  
    console.log(this.props,first)
    return (
      <Grid columns={3} fluid={true}>
        <Grid.Column stretched width={8}>
          <Card fluid>
            <Image src={first.thumbs[0]} fluid />
            <Rail internal position='left'>
              <Segment>Left Rail Content</Segment>
            </Rail>

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

HomeBlock.propTypes = {
  items: PropTypes.array.isRequired,
  alignItem: PropTypes.oneOf(["left", "right"]).isRequired
};
HomeBlock.defaultProps = {
  items: [],
  alignItem: "left"
};
