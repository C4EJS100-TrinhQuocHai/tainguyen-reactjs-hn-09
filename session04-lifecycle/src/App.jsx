import React, { Component } from 'react'
import Child from './components/Child';
import Form from './components/Form';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      count:0, // cơ chế state trong classcomponent merge, function replace
      active:true,
    }
  }
    componentDidUpdate=()=>{
      console.log("componentDidUpdate được thực thi");
    }
    componentWillUpdate=()=>{
      console.log("componentWillUpdate bắt đầu được gọi " );
    }
    shouldComponentUpdate=()=>{
        console.log("shouldComponentUpdate được thực thi");
        return true
    }
    componentDidMount=()=>{
      console.log("sau khi component render lần đầu tiên chạy đến didMount");
      // Nơi để call API 
    }
    componentWillMount=()=>{
      console.log("componentWillMount bắt đầu chạy");
    }
    increaseCount=()=>{
      this.setState({
        count:this.state.count+1
      })
    }
    removeChild=()=>{
        this.setState({
          active:false,
        })
    }
  render() {
    console.log("component bắt đầu render ");
    return (
      <>
        Count {this.state.count}
        <button onClick={this.increaseCount}>click</button>
        {this.state.active ? <Child></Child> :""}
        <button onClick={this.removeChild}> Remove Child</button>
        <Form></Form>
      </>
    )
  }
}
