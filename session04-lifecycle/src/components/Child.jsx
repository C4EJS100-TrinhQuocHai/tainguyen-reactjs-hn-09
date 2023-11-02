import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount=()=>{
        console.log("componentWillUnmount được thực thi" );
    }
  render() {
    console.log("11111111");
    return (
      <div>Giai đoạn unmounting </div>
    )
  }
}
