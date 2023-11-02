import React, { Component } from 'react'
export default class Search extends Component {
    constructor(){
        super()
        this.state={
            search:"",
        }
    }
    changeValue=(event)=>{
        // lấy giá trị ô input người dùng nhập vào
        // console.log(event.target.value);
        // sau khi lấy xong cập nhật state
        this.setState({
            search:event.target.value,
        })
    }  
  render() {
    // console.log("111111111",this.props.search);
    return (
      <>
        <input
         type="text"
         onChange={this.changeValue}
         />
        <button onClick={()=>this.props.search(this.state.search)}>Tìm kiếm </button>
      </>
    )
  }
}
