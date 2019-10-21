import React from 'react'
import { mount, shallow } from 'enzyme'
import { stub } from 'sinon'
import BMICalculator from '../Components/BMICalculator'

describe('<BMICalculator />', () => {

  it('shows metric as the standard method', () => {
    const component = mount(<BMICalculator />)
    const weightLabel = <label>Weight</label>
    const heightLabel = <label>Height</label>
    expect(component.contains(weightLabel)).toEqual(true)
    expect(component.contains(heightLabel)).toEqual(true)
  })

  it('can change method', () => {
    const onChangeValue = stub()
    const component = shallow(<BMICalculator onChangeValue={onChangeValue} />)
    const weightLabel = <label>Weight</label>
    const heightLabel = <label>Height</label>
    component.find("MethodSelect").prop('onChangeValue')({target: {value:'imperial'}})
    expect(component.contains(weightLabel)).toEqual(true)
    expect(component.contains(heightLabel)).toEqual(true)
  })
})