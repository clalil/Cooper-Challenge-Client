import React from 'react'
import { Input } from 'semantic-ui-react'

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
            label={{ basic: true, content: 'Age (yrs)' }}
            labelPosition='right'
            placeholder='Enter age in years'
            id="age" onChange={props.inputChangeHandler}
          />
        </div>
        <div className="label-padding">
          <Input
            label={{ basic: true, content: 'Distance (meters)' }}
            labelPosition='right'
            placeholder='Enter total distance'
            id="distance" onChange={props.inputChangeHandler}
          />
        </div>
      </div>
    </>
  )
}

export default InputFields