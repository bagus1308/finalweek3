import React, { Component } from 'react'
import Header from './Header'
//import FormPertanyaan from './component/FormPertanyaan'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import AboutQuestion from './component/AboutQuestion';
//import CategoryQuiz from './component/CategoryQuiz';
import CreateQuiz from './component/CreateQuiz/CreateQuiz';
//router untuk menyiapkan semua yang ada disini
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
          <Header linkStatus={this.state.linkStatus} />
          {/* switch untuk memilih */}
          <Switch>
            {/* <Route path="/question">
              <CategoryQuiz updateLinkStatus={this.updateLinkStatus} />
            </Route> */}
            {/* <Route path="/aboutus">
              <AboutQuestion updateLinkStatus={this.updateLinkStatus} />
            </Route > */}
            {/* <Route path="/attemptquiz/:type">
              <FormPertanyaan updateLinkStatus={this.updateLinkStatus} />
            </Route> */}
            <Route path="/bikinkuis">
              <CreateQuiz updateLinkStatus={this.updateLinkStatus} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
