import React, { Component } from 'react'
import DisplayBMIResult from './DisplayResult'
import MethodSelect from './MethodSelect'

class BMICalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: 'metric',
      weight: '',
      height: ''
    }
  }

  onChangeValue = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    let currentMethod = this.state.method
    return (
      <>
      <h1>BMI Calculator</h1>
      <div>
        <MethodSelect
          onChangeValue={this.onChangeValue}
        />

        <div className="label-padding"></div>
        <div>
          <label>Weight</label>
          <input
            id="weight"
            placeholder={currentMethod === 'metric' ? ' in kilograms (kg)' : ' in pounds (lbs)'}
            value={this.state.weight}
            onChange={this.onChangeValue}
          />
        </div>

        <div>
          <label>Height</label>
          <input
            id="height"
            placeholder={currentMethod === 'metric' ? ' in centimetres (cm)' : ' in inches (in)'}
            value={this.state.height}
            onChange={this.onChangeValue}
          />
        </div>

        <DisplayBMIResult
          method={this.state.method}
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
      </>
    )
  }
}

export default BMICalculator;