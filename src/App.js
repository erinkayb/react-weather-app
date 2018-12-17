import React, { Component } from "react"
import "./App.css"
import moment from "moment"
import FrontSide from "./components/FrontSide"
import Form from "./components/Form"
import Weather from "./components/Weather"

// const API_KEY = "8d732ce873dc21dcc6235c2efddfd6d6"

class App extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-front">
          <FrontSide
            date={moment()}
            icon="default"
            temperature={12}
            apparentTemperature={19}
            summary="sunny"
            currentCityName="Amsterdam"
          />
        </div>
        <div className="panel-back">panel back</div>
      </div>
    )
  }
}

export default App
