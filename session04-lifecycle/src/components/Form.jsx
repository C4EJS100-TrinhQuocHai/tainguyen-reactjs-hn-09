import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            age:"",
        }
    }
    saveInfo=(e)=>{
       
         e.preventDefault()
    }
        changeValue=(e)=>{
            
        let aaaa= e.target.name;
        let value= e.target.value;
        this.setState({
            [aaaa]:value,
        })
         
    }
  render() {
        console.log(this.state);
   /* 
        let obj= {
            name:"mai"
        }
        obj["age"]=25
    */
    return (
      <>
        <form action="">
            <label htmlFor="">Họ và Tên </label>
            <input
             placeholder='mời nhập tên' 
             onChange={this.changeValue}
             name='name'
             /> <br />
            <label htmlFor=""> Tuổi </label>
            <input
             placeholder='nhập tuổi'
             onChange={this.changeValue}
             name='age'
             ></input> <br />
            <button onClick={this.saveInfo}>Lưu  </button>
        </form>
      </>
    )
  }
}
