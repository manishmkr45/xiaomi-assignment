import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

 class Login extends Component{

    componentWillUnmount() {
        
   }
   
   handleSubmit = (e)=>{
        console.log("Login Clicked")
        this.props.history.push('/profile')
   }
    render(){
        return(
            <div className="container">
                    <div className="loginContainer">
                        <h3> Login </h3>
                        <div className="card" style={{width: '500px', padding:'20px'}}>
                            <input type="text" id="loginId" placeholder="Enter your username" />
                            <input type="password" id="pwd" placeholder="Enter your Password" />
                            <button type="submit" onClick= {this.handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
        )
    }
}


export default (Login)