import React, { Component } from 'react'
import Search from './components/Search'
import Sort from './components/Sort'
import ListStudent from './components/ListStudent'
import AddStudent from './components/AddStudent'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      students:JSON.parse(localStorage.getItem("students"))||[],
      searchValue:"",
      sort:"",
    }
  }
  // khởi tạo function
  searchDir=(value)=>{
    this.setState({
      searchValue:value,
    })
  }
  sortBy=(sortBy)=>{
      this.setState({
        sort:sortBy
      })
  }
  // function thêm sinh viên
  addStudent=(user)=>{
    let newArray=this.state.students;
    newArray.push({...user,id:this.uuid()});
    this.setState({
      students:newArray,
    })
    localStorage.setItem("students",JSON.stringify(this.state.students));
  }
  // function tạo id ngẫu nhiên
  uuid=()=>{
      return Math.floor(Math.random()*99999999 + new Date().getMilliseconds()); 
  }
  render()
   {
    console.log(this.state.students);
    let student=[];
    if(this.state.searchValue!=""){
        this.state.sort="";
      let result= this.state.students.filter((item)=>{
        return item.name.indexOf(this.state.searchValue) !=-1;
      });
      if(result.length==0){
        student=this.state.students;
      }else{
        student=result;
      }
    }else{
        student=this.state.students;
    }
    // logic xử lý khi sort
    if(this.state.sort!=""){
      if(this.state.sort=="name"){
         let result= this.state.students.sort((a,b)=>{
           if(a.name.split(" ")[a.name.split(" ").length - 1] > b.name.split(" ")[b.name.split(" ").length - 1]){
                        return 1;
                    }else if(a.name.split(" ")[a.name.split(" ").length - 1] == b.name.split(" ")[b.name.split(" ").length - 1]){
                        return 0;
                    }else{
                        return -1;
                    }
      })
      student=result;
      }else{
        let result=this.state.students.sort((a,b)=>{
            return  a.age-b.age;
        })
        student=result;
      }
    }
    return (
      <>
        {/* đưa các component con vào */}
        <Search search={this.searchDir}></Search>
        <Sort sort={this.sortBy}></Sort>
        <AddStudent add={this.addStudent}></AddStudent>
        <ListStudent delete={this.deleteUser}  student={student}></ListStudent>
      </>
    )
  }
}
