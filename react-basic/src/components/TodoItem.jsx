import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    console.log("1111",this.props);
    const {todos}=this.props
    return (
      <>
        <ul>
            {todos.map((item,index)=>(
                <li > {item}</li>
            ))}
        </ul>
      </>
    )
  }
}
