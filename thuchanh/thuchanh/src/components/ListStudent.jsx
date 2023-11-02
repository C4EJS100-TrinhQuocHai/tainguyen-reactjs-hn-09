import React, { Component } from 'react'
import Student from './Student';
export default class ListStudent extends Component {
     
  render() {
    // console.log(this.props);
    // destructuring
    // let student= this.props.student
    const {student}=this.props;
    
    return (
        <>
            <table border={1} cellPadding={5} cellSpacing={5}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>TÊN</th>
                        <th>TUỔI</th>
                        <th>ID</th>
                        <th colSpan={2}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                  {student.map((item,index)=>{
                    return <tr key={index}><Student  student={item} index={index}></Student></tr>
                  })}
                </tbody>
            </table>
        </>
    )
  }
}
