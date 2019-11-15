import React from 'react'
import { fetchDog } from '../api/dog'
import Dog from './Dog'
// import { get } from 'https'

class App extends React.Component {
  state = {
    dog: ''
  }

  componentDidMount () {
    fetchDog()
      .then(response => {
        console.log(response.body)
        this.setState({
          dog: response.body
        })
      })
  }

  render () {
    return (
      <>

        {/* <h1>Welcome to our API playground!!!!</h1> */}
        <div style={{
          height: this.props.height,
          width: this.props.width
        }} >
          <div className="row" style={{ textAlign: 'center' }}>

            <div className="col-md-2 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}</div>

            <div className="col-md-4 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>

            <div className="col-md-4 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>

            <div className="col-md-2 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>

          </div>

          <div className="row" style={{ textAlign: 'center' }}>

            <div className="col-md-4 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}</div>
            <div className="col-md-4 col-sm-6 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>
            <div className="col-md-4 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>

          </div>

          <div className="row" style={{ textAlign: 'center' }}>

            <div className="col-md-2 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}</div>
            <div className="col-md-4 col-sm-6 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>
            <div className="col-md-4 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>
            <div className="col-md-2 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>

          </div>
          <div className="row" style={{ textAlign: 'center' }}>

            <div className="col-md-4 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}</div>
            <div className="col-md-4 col-sm-6 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>
            <div className="col-md-4 col-sm-3 col-xs-3 container">
              { this.state.dog && <Dog dog={this.state.dog }/>}
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default App
