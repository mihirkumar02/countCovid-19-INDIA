import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/Landing';
import Statistics from './components/Statistics';
import About from './components/About';

import { Provider } from 'react-redux';
import store from './store';
import Search from './components/Search';


class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Landing} /> 
              <Route path="/search" component={Search} />
              <Route path="/statistics" component={Statistics} />  
              <Route path="/about" component={About} />  
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
