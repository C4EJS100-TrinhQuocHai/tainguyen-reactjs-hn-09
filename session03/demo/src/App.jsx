import React, { Component } from 'react'
import ChildClassComponent from './components/ChildClassComponent'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      student:[],
      info:{
        address:"Hà Nội",
      },
      count:0,
    }
    // this.abc=this.abc.bind(this);
  }
    abc=()=>{
      console.log("11111");
      this.setState({
        count:this.state.count+1
      })
    }
    sayHello=(mess)=>{
        console.log("mess",mess);
    }
  render() {
    console.log("component đã re-render",this.state.info.address);
    return (
     <>
        <h1> PROPS </h1>
        <ChildClassComponent name="Minh Thảo" age={25}></ChildClassComponent>
        <p>giá trị biến đếm : {this.state.count}</p>
        
        <button onClick={this.abc} >click</button>
        <button  >say Hello</button>

     </>
    )
  }
}
