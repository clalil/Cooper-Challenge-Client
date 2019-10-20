import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import DisplayCooperResult from './Components/DisplayCooperResult'
import InputFields from './Components/InputFields'
import LoginForm from './Components/LoginForm'
import { authenticate } from './Modules/Auth'
import DisplayPerformanceData from './Components/DisplayPerformanceData'
import Footer from './Components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderloginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false,
      renderIndex: false
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  async onLogin(e) {
    e.preventDefault()
    let resp = await authenticate(this.state.email, this.state.password)

    resp.authenticated === true ? this.setState({ authenticated: true })
      : this.setState({ message: resp.message, renderLoginForm: false })
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true })
  }

  indexUpdated() {
    this.setState({ updateIndex: false })
  }

  render() {
    let renderLogin, user, performanceDataIndex

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid
      renderLogin = (
        <p>Hi {user}</p>
      )
      performanceDataIndex = (
        <button id="show-index"
          onClick={() => this.setState({ renderIndex: true })}>
          Show past entries
        </button>
      )

      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <button
              onClick={() => this.setState({ renderIndex: false })}>
              Hide past entries
            </button>
          </>
        )
      } else {
        performanceDataIndex = (
          <button id="show-index"
            onClick={() => this.setState({ renderIndex: true })}>
            Show past entries
          </button>
        )
      }
    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <Button color='vk' type='submit' id="login"
              onClick={() => this.setState({ renderLoginForm: true })}>
              Login
            </Button>

            <p>{this.state.message}</p>
          </>
        )
      }
    }

    return (
      <div>
        <div className="app-container">
        <h1>Cooper Calculator</h1>
        <InputFields
          inputChangeHandler={this.onChange.bind(this)}
        />

        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={this.entryHandler.bind(this)}
        />
        {performanceDataIndex}
        {renderLogin}
        </div>
        <div className="spacious">
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
