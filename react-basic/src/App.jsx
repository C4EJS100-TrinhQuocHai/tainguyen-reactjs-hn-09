import React, { Component } from 'react'
import ListTodo from './components/ListTodo'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      todos:["coffee","go to bed","learn reactjs"],
    }
  }
  render() {
    return (
      <>
        <input type="text" />
        <button>add</button>
        <ListTodo data={this.state.todos}></ListTodo>
      </>
    )
  }
}

