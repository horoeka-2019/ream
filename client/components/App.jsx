import React from 'react'
import { fetchDog } from '../api/dog'
import Dog from './Dog'
import { get } from 'https'

class App extends React.Component {
  state = {
    dog: null
  }

  componentDidMount () {
    fetchDog()
      .then(response => {
        this.setState({
          dog: response.body
        })
      })
  }

  render () {
    return (
      <>
        <h1>React development has begun!</h1>
        { this.state.dog && <Dog dog={this.state.dog }/>}
      </>
    )
  }
}

export default App
