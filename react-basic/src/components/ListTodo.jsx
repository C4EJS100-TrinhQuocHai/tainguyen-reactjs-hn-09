import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class ListTodo extends Component {
  render() {
    const {data}=this.props
    return (
      <>
        <TodoItem todos={data}></TodoItem>
      </>
    )
  }
}
