import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Parse from 'parse';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './routes';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component{
 render(){ 
   return (
     <Provider store={store}>
     <Router>
    <Routes/>
      </Router>
  </Provider>
  );
 }
}

render(<App/>, document.getElementById('root'));
