import React, { Component } from 'react'
import { BMICalculator } from '../Modules/BMICalculator'
import { Placeholder } from 'semantic-ui-react'

class DisplayBMIResult extends Component {
  calculate = () => {
    var weight = this.props.weight
    var height = this.props.height
    var method = this.props.method

    return BMICalculator(weight, height, method)
  }

  render() {
    let finalBMI = this.calculate()
  
  const setBMIMessage = (finalBMI) => {
    if (finalBMI < 18.5) {
      return "Underweight"
    }
    if (finalBMI > 18.5 && finalBMI < 25) {
      return "Normal"
    }
    if (finalBMI > 25 && finalBMI < 30) {
      return "Overweight"
    }
    if (finalBMI > 30 && finalBMI < 50) {
      return "Obese"
    }
  }

  let BMIMessage = setBMIMessage(finalBMI)
  let results

    if (this.props.weight !== '' && this.props.height !== '') {
      results =
        <div>
          <p>Your BMI is {this.calculate()} and you are {BMIMessage}.</p>
        </div>
    }

    return (
      <div id='response'>
        <Placeholder fluid>
          {results}
        </Placeholder>
      </div>
    )
  }
}

export default DisplayBMIResult