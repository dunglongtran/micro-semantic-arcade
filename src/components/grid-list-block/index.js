import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Grid,List,
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
    const [first, ...rest] = this.props.items;

    console.log(this.props);
    return (
      <Grid columns={2} fluid={true}>
        <Grid.Column stretched width={8}>
          <Card fluid>
            <Image src={first.thumbs[0]} fluid />
            <Card.Content>
              <Card.Header>
                Matthew
      </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
        </span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
      </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={8}>
          <List>
          {rest.map(item=>(<List.Item>
              <Image src={item.thumbs[0]} size='small'/>
              <List.Content>
              <List.Header as='a'>{item.name}</List.Header>
            </List.Content>
            </List.Item>))
          }
          </List>
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
