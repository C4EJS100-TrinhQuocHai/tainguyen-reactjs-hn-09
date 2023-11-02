import React, { Component } from 'react'

export default class Sort extends Component {
   /*  constructor(){
        super()
        this.state={
            option:"",
        }
    } */
    changeOption=(event)=>{
            // console.log(event.target.value);
            this.props.sort(event.target.value);
    }
  render() {
        // gọi hàm từ cha sang con rồi truyền giá trị sort cho thằng cha
        
    return (
    <>
        <select name="" id="" onChange={this.changeOption}>
            <option value="">sắp xếp </option>
            <option value="name">bảng chữ cái</option>
            <option value="age">tuổi tăng dần</option>

        </select>
    </>
    )
  }
}
