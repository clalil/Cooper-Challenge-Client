import React from 'react'
import { Input } from 'semantic-ui-react'

const BMIInputFields = (props) => {
  let userChoiceMethod = props.metricValue

  return (
    <>
      <div>
        <div className="label-padding">
          <Input
            label={{ basic: true, content: 'Weight' }}
            labelPosition='right'
            placeholder={ userChoiceMethod === 'metric' ? ' in kilograms (kg)'  : ' in pounds (lbs)'}
            id="weight" onChange={props.BMIInputChangeHandler}
          />
        </div>
        <div className="label-padding">
          <Input
            label={{ basic: true, content: 'Height' }}
            labelPosition='right'
            placeholder={ userChoiceMethod === 'metric' ? ' in centimetres (cm)'  : ' in inches (in)'}
            id="height" onChange={props.BMIInputChangeHandler}
          />
        </div>
      </div>
    </>
  )
}

export default BMIInputFields