import React, { Component } from 'react'
import { BMICalculator } from '../Modules/BMICalculator'
import { Button, Placeholder } from 'semantic-ui-react'

class DisplayBMIResult extends Component {
  calculate = () => {
    var weight = this.props.weight
    var height = this.props.height
    var method = this.props.method

    return BMICalculator(weight, height, method)
  }

  async saveBMIData() {
    const bmi_result = BMIMessage
    try {
      await saveData(bmi_result)
      this.props.entryHandler()
    } catch(error) {
      console.log(error)
    }
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
    let bmi_results
    let saveBMIButton

    if (this.props.authenticated === true && this.props.entrySaved === false) {
      saveBMIButton = (
        <>
        <Button color='vk' id="save-result"
        onClick={this.saveBMIData.bind(this)}>
        Save entry
        </Button>
        </>
      )
    } else if (this.props.authenticated === true && this.props.entrySaved === true) {
      saveBMIButton = (
        <>
        <p>Your entry was saved</p>
        </>
      )
    }

    if (this.props.weight !== '' && this.props.height !== '') {
      bmi_results =
        <div>
          <p>Your BMI is {this.calculate()} and you are {BMIMessage}.</p>
        </div>
    }

    return (
      <div id='response'>
        <Placeholder fluid>
          {bmi_results}
        </Placeholder>
      </div>
    )
  }
}

export default DisplayBMIResult