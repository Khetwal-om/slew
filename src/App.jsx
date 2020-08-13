import React, { Component } from 'react'
import axios from 'axios'

import Users from './components/users-component/users.component'

import './App.css'

const URL='https://03c52ed6-824c-4b81-a09a-4735959f1de5.mock.pstmn.io/paris'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:  [],
             avatar: 0
        }
    
      }
    
    async componentDidMount(){
        const response = await axios.get(URL)
        console.log(response.data.members)
        this.setState({
            users: response.data.members
        })
    }
    render() {

        return (
            <div className="App"> 
                {this.state.users && this.state.users.map(({id,...otherProps}) => <Users key={id} {...otherProps} avatar={Math.floor(Math.random()*10+1)} /> )} 
            
            </div>
        )
    }
}

export default App
