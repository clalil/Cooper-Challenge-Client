import React from 'react'
import { Button, Form } from 'semantic-ui-react'


const LoginForm = (props) => {
  return (
    <div>
    <Form widths="equal" id="login-form">
      <Form.Field width={8} className="login-form-div">
        <label>Email</label>
        <input id="email" onChange={props.inputChangeHandler} />
      </Form.Field>
      <Form.Field width={8} className="login-form-div">
        <label>Password</label>
        <input id="password" type="password" onChange={props.inputChangeHandler} />
      </Form.Field>
      <Button color='vk' type='submit' onClick={props.loginHandler} id="submit">Submit</Button>
    </Form>
    </div>
  )
}

export default LoginForm;