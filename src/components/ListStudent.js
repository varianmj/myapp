import React, { Component } from 'react'

export default class ListStudent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        
        return(
            <div>
                <ul>
                {this.props.students.map((student) => 
                {return <li><p>{student.name},age { student.age}</p></li>})}
                </ul>
            </div>
            )
    }
}