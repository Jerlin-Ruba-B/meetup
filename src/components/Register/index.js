import {Component} from 'react'
import MeetContext from '../../Context/MeetContext'
import {
  LogoPic,
  BgLoginContainer,
  RegisterContainer,
  LoginImage,
  FormContainer,
  FormHeading,
  Label,
  InputEl,
  SelectEl,
  Options,
  RegisterNow,
  Error,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {isNameError: false}

  render() {
    const {isNameError} = this.state
    return (
      <MeetContext.Consumer>
        {value => {
          const {updatePersonName, updatePersonTopic, updateHome, name} = value

          const updateName = event => {
            updatePersonName(event.target.value)
            updateHome()
          }
          const updateTopic = event => {
            const selectedTopic = topicsList.filter(
              each => each.id === event.target.value,
            )

            updatePersonTopic(selectedTopic[0].displayText)
          }

          const updateDetails = event => {
            event.preventDefault()
            const {history} = this.props
            if (name === '') {
              this.setState({isNameError: true})
            } else {
              this.setState({isNameError: false})

              history.replace('/')
            }
          }

          return (
            <>
              <LogoPic
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <BgLoginContainer>
                <RegisterContainer>
                  <LoginImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <FormContainer onSubmit={updateDetails}>
                    <FormHeading>Let us join</FormHeading>
                    <>
                      <Label htmlFor="name">NAME</Label>
                      <InputEl
                        type="text"
                        placeholder="Your name"
                        id="name"
                        onChange={updateName}
                        value={name}
                      />
                    </>
                    <>
                      <Label htmlFor="topics">TOPICS</Label>
                      <SelectEl
                        id="topics"
                        selected={topicsList[0].id}
                        onChange={updateTopic}
                      >
                        {topicsList.map(each => (
                          <Options key={each.id} value={each.id}>
                            {each.displayText}
                          </Options>
                        ))}
                      </SelectEl>
                      <RegisterNow type="submit">Register Now</RegisterNow>
                      {isNameError && <Error>Please enter your name</Error>}
                    </>
                  </FormContainer>
                </RegisterContainer>
              </BgLoginContainer>
            </>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}
export default Register
