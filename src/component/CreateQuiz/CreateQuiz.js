import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CheckBox from './CheckBox';
import RadioQuiz from './RadioQuiz';
import FormTextArea from './FormTeksArea';
import Dropdown from './Dropdown';
//import Header from './header';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { linkStatus: [] }
  }

  updateLinkStatus = (status) => {
    this.setState({ linkStatus: status })


  }

  render() {
    return (
      <Router>
        <div>
          <Dropdown linkStatus={this.state.linkStatus} />
          <Switch>
            <Route path="/redio">
              <RadioQuiz updateLinkStatus={this.updateLinkStatus} />
            </Route>
            <Route path="/cekboks">
              <CheckBox updateLinkStatus={this.updateLinkStatus} />
            </Route>
            <Route path="/teksarea">
              <FormTextArea updateLinkStatus={this.updateLinkStatus} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
