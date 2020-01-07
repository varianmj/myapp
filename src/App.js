import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Form from './components/FormStudent'
import ListStudent from './components/ListStudent'


// 1. Component
// 2. State
// 3. Props
class App extends Component {
  constructor(){
    super()
    this.state={
        students : [
            { name : 'varian', age: 21}
        ],
    }
  }

  addStudent(name,age){
    let currentStudents = this.state.students
    let newStudent = { name,age}

    currentStudents.push(newStudent)
    this.setState({
        students: currentStudents

    })
}
  render(){
  return (
    <div className="App">
      <Header/>
      <Form addStudent= { (name,age)=> this.addStudent}/>
      <h3> Students: </h3>
      <ListStudent students={this.state.students}/>
  
    </div>
  );
}}


export default App;
