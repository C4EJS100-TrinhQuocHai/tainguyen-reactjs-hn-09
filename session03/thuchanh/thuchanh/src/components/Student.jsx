import React, { Component } from 'react'

export default class Student extends Component {
  render() {
      let data= this.props.student;
    return (
      <>
        <td>{this.props.index+1}</td>
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.id}</td>
      </>
    )
  }
}
