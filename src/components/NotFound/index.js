import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundTitle>Page not found</NotFoundTitle>
    <NotFoundDesc>
      We are sorry, the page you requested could not be found
    </NotFoundDesc>
  </NotFoundContainer>
)
export default NotFound
