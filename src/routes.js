import React from "react";
import { BrowserRouter as Router, Route, Link,Redirect ,Switch } from "react-router-dom";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import About from "./containers/search.container";
import Home from "./containers/home.container";
import Topics from "./containers/category.container";
import Detail from "./containers/details.container";

const Root= props=>(
  <div>
  <Redirect from="/" to='/home' />
  <Route exact path="/home" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/topics" component={Topics} />
</div>
)

class BasicExample extends React.Component{
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render(){

    const { visible } = this.state

    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            width='thin'
            direction='left'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
          
              <Root/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>

    )
}}

export default BasicExample;


