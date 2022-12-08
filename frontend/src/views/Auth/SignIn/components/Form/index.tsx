import { Row, Col, FormGroup, Label } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { useState } from 'react'

const Form = (): JSX.Element => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData

  const handleInput = (e: HTMLInputElement): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Row>
      <Col>
        <AvForm>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor='username' >Username</Label>
                <AvField
                  name="metaTitle"
                  placeholder="Enter metaTitle"
                  value={username}
                  onChange={handleInput}
                  type="text"
                  errorMessage="metaTitle is required"
                  className="form-control"
                  validate={{ required: { value: true } }}
                  id="metaTitle"
                />
              </FormGroup>
            </Col>
          </Row>
        </AvForm>

      </Col>
    </Row>
  )
}

export default Form
