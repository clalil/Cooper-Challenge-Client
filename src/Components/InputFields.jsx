import React from 'react'
import { Select, Input } from 'semantic-ui-react'

const description = [
  'This is a simple fitness tracking application.',
  'The Cooper Test (aka The 12-minute run) is an easy way to measure aerobic fitness.',
].join(' ')

const InputFields = (props) => {
  return (
    <>
      <div>
        <select id="gender" onChange={props.inputChangeHandler}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <div className="label-padding">
          <Input
            label={{ basic: true, content: 'Years' }}
            labelPosition='right'
            placeholder='Enter your age...'
            id="age" onChange={props.inputChangeHandler}
          />
        </div>
        <div className="label-padding">
          <Input
            label={{ basic: true, content: 'Meters' }}
            labelPosition='right'
            placeholder='Enter your distance...'
            id="distance" onChange={props.inputChangeHandler}
          />
        </div>
      </div>
    </>
  )
}

export default InputFields