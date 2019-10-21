import React from 'react'
import { Input } from 'semantic-ui-react'

const BMIInputFields = (props) => {
  return (
    <>
      <div>
        <div className="label-padding">
          <Input
            label={{ basic: true, content: 'Weight' }}
            labelPosition='right'
            placeholder='Enter your weight...'
            id="weight" onChange={props.BMIInputChangeHandler}
          />
        </div>
        <div className="label-padding">
          <Input
            label={{ basic: true, content: 'Height' }}
            labelPosition='right'
            placeholder='Enter your height...'
            id="height" onChange={props.BMIInputChangeHandler}
          />
        </div>
      </div>
    </>
  )
}

export default BMIInputFields