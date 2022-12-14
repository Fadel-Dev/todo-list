import React from 'react'
import { useState } from 'react';
import Header from './Header';
import './style.css'


export default function ListTask() {
    const [todolist, setTodolist]= useState([]);
const [newTask, setNewTask]= useState("");

const handlerChange=(event)=>{
  setNewTask(event.target.value);
};
const addTask = ()=>{
  const task={
    id:todolist.length===0 ? 1 :todolist[todolist.length-1].id+1,
    taskName:newTask,
  }
  setTodolist([...todolist,task]);
}
 /*const deleteTask = (taskName)=>{
 const newTodoList= todolist.filter((task)=>{
 if(task===taskName){
    return false;
  }else{
    return true;
  }
 })
  setTodolist(newTodoList);
}
*/
const deleteTask = (id)=>{
 
  setTodolist( todolist.filter((task)=> task.id !==id));
}
  return (
    <div className='main'>
         <div className="App">
      < Header />
      <div className='addTask'>
        <input onChange={handlerChange} placeholder="entrez une tache"/>
        <button className='addBtn' onClick={addTask} >Add Task</button>
      </div>
      <div className='list'>
        {
          todolist.map((task)=>{
           return <span>{task.taskName} <button onClick={()=>deleteTask(task.id)}>x</button> <br/> </span> 
          })
        }
      </div>
    </div>
    </div>
  )
}
