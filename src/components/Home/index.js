import {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  LogoPic,
  BgContainer,
  Heading,
  Description,
  RegisterButton,
  HomeImage,
} from './styledComponent'
import MeetContext from '../../Context/MeetContext'

class Home extends Component {
  render() {
    return (
      <MeetContext.Consumer>
        {value => {
          const {isHome, name, topic} = value

          return (
            <>
              <LogoPic
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <BgContainer>
                {isHome ? (
                  <>
                    <Heading>{`Hello ${name}`}</Heading>
                    <Description>{`Welcome to ${topic}`}</Description>
                  </>
                ) : (
                  <>
                    <Heading>Welcome to MeetUp</Heading>
                    <Description>Please register for the topic</Description>
                    <Link to="/register">
                      <RegisterButton type="button">Register</RegisterButton>
                    </Link>
                  </>
                )}

                <>
                  <HomeImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              </BgContainer>
            </>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}
export default Home
