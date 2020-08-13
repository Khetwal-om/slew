import React, { Component } from 'react'

import './users.styles.css'
import { Avatar } from '@material-ui/core'

import Modal from 'plain-react-modal'
import 'plain-react-modal/dist/index.css'

import UserActivity from '../useractivity-component/useractivity.component'


class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open: false
        }
        
    }
    handleOpen =() =>{
        this.setState({
          open: true
        })
      }
      handleClose=() =>{
        this.setState({
          open: false
        })
      }
    render() 
    
      {
        const {real_name,tz ,activity_periods}=this.props
        
        console.log(this.props.avatar)
        return (
            <div className="Users">

            <Avatar  src={`https://randomuser.me/api/portraits/men/${this.props.avatar}.jpg`} />  
            <span className="name">{real_name}</span>
            <span className="location">{tz}</span>
          <button  type="button" onClick={this.handleOpen} className="more">   MORE       </button>            


      { this.state.open && (    <Modal
            onClose={this.handleClose}
            open={this.state.open}
            title='DETAILS'
            overlayColor='rgba(255, 255, 255, .8)'
            backgroundColor='#fff'
        >
             <UserActivity  activity_periods={activity_periods} />
      
      </Modal> )} 
        </div>
        )
    }
}

export default Users
