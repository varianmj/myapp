import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return <div className="wrapper">
      <div className="form-wrapper">
        <hi>Create Account</hi>
        <form onsubmit={this.handlesubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input type="text"
             className=""
             placeholder="First Name" 
             type="text" name="firstName"
             noValidate
             onChange={this.handleChange}
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">last Name</label>
            <input type="text"
             className=""
             placeholder="last Name" 
             type="text" name="lastName"
             noValidate
             onChange={this.handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">email</label>
            <input type="text"
             className=""
             placeholder="email" 
             type="text" name="email"
             noValidate
             onChange={this.handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">password</label>
            <input type="text"
             className=""
             placeholder="password" 
             type="text" name="password"
             noValidate
             onChange={this.handleChange}
            />
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <smal>Already Have an Account?</smal>
          </div>
        </form>
      </div>
     </div>

    
  }
}
export default App;