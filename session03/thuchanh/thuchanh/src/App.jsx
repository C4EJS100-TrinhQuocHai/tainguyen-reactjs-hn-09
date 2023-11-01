import React, { Component } from 'react'
import Search from './components/Search'
import Sort from './components/Sort'
import ListStudent from './components/ListStudent'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      students:[
        {
          name:"Nguyễn Văn Hào",
          age:20,
          id:"001"
        },
          {
          name:"Việt Hiếu",
          age:19,
          id:"002"
        },
          {
          name:"Văn Minh",
          age:18,
          id:"003"
        },
          {
          name:"Tiến Dương",
          age:25,
          id:"004"
        }
      ],
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
  /* 
    function hello(mess){

    }
    hello("abc")
   */
  //searchBy ASC DESC
  // khởi tạo function sort
  sortBy=(sortBy)=>{
      this.setState({
        sort:sortBy
      })
      // console.log(sortBy);
  }
  render() {
    let student=[];
    if(this.state.searchValue!=""){
        this.state.sort="";
      let result= this.state.students.filter((item)=>{
        return item.name.indexOf(this.state.searchValue) !=-1;
      });
      if(result.length==0){
        student=[...this.state.students];
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
        <ListStudent  student={student}></ListStudent>
      </>
    )
  }
}
