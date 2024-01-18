// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/display'

import { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      todo : [],
      todoItem : {
        key : "",
        discription:"",
      }
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const short= this.state.todoItem
    console.log(this.state.todoItem.key)
    if(short.discription!=""){
      const newArray=[...this.state.todo,short] 
      this.setState({
        todo: newArray,
        todoItem: {
          key:"",
          discription:"",
        }
      })
    }
    

  }

  handleInput=(e)=>{
    this.setState({
      todoItem: {
        key: Date.now(),
        discription: e.target.value
      }
    }
    )
  }

  handleUpdate=(newUpdatedDescrption,key)=>{
    const updatechange= this.state.todo;

    updatechange.map((e)=>{
      if(e.key==key){
        e.discription=newUpdatedDescrption;
      }
    })
    this.setState({
      todo: updatechange
    })
  }

  handleDelete=(key)=>{
    const filteredArray= this.state.todo.filter((e)=>e.key!=key);
    this.setState({
      todo: filteredArray
    })

  }



  render() {
    return (
      <div id='outerdiv'>
        <h1>TO-do Buddy</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Type Here' onChange={this.handleInput} value={this.state.todoItem.discription}/>
        <button type='submit'>Add Todo</button>
      </form>
      <p>{this.state.todoItem.discription}</p>
      <Display todoArray={this.state.todo} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
    </div>
    )
  }
}


