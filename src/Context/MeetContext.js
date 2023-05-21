import React from 'react'

const MeetContext = React.createContext({
  name: '',
  topic: '',
  updatePersonName: () => {},
  updatePersonTopic: () => {},
  isHome: false,
  updateHome: () => {},
})
export default MeetContext
