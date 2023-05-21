import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import MeetContext from './Context/MeetContext'
import Home from './components/Home'
import Register from './components/Register'
import './App.css'
import NotFound from './components/NotFound'

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

class App extends Component {
  state = {name: '', topic: topicsList[0].id, isHome: false}

  updatePersonName = name => {
    this.setState({name})
  }

  updatePersonTopic = topic => {
    this.setState({topic})
  }

  updateHome = () => {
    this.setState({isHome: true})
  }

  render() {
    const {name, topic, isHome} = this.state
    return (
      <MeetContext.Provider
        value={{
          name,
          topic,
          isHome,
          updatePersonName: this.updatePersonName,
          updatePersonTopic: this.updatePersonTopic,
          updateHome: this.updateHome,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetContext.Provider>
    )
  }
}

export default App
