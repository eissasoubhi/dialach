import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header.js'
import Home from './Home.js'

export default class App extends React.Component {
  render() {
    return (
      <div class="page">
        <Header/>
        <Switch>
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <Route exact path="/" component={Home} />
              </div>
            </div>
          </div>
        </Switch>
      </div>
      );
  }
}