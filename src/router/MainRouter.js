import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from '../pages/nav/Nav'
import Login from '../pages/login/Login'
import Regster from '../pages/regster/Regster'
import City from '../pages/city/City'
import Error404 from '../pages/error/404'
export default class MainRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Nav}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/regster" component={Regster}></Route>
          <Route path="/city" component={City}></Route>

          {/* 默认 */}
          <Route component = {Error404}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
