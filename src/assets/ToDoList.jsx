import React, { useState } from 'react';

 function ToDoList() {

   const [tasks, setTasks] = useState([]); 
   const [newTask, setNewTasks] = useState("");

   function handleInputChange(event){
        setNewTasks(event.target.value);
   }

   function addTask(){

        if(newTask.trim() !==""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }
        
   }

   function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
   }

   function moveTaskUp(index){

    if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index] , updatedTasks[index-1]] = 
        [updatedTasks[index-1] , updatedTasks[index]];
        setTasks(updatedTasks);
    }

   }

   function moveTaskDown(index){
    
    if(index< tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index] , updatedTasks[index+1]] = 
        [updatedTasks[index+1] , updatedTasks[index]];
        setTasks(updatedTasks);
    }

   }

  return (
    <div className='to-do-list'>

      <h1> To-Do-List </h1>

      <div>
        <input type ="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange} />

        <button className='add-btn'
                onClick={addTask}>
            Add
        </button>        
       </div> 

       <ol>
        {tasks.map((tasks, index) => 
        <li key = {index}>
            <span className='="text'> {tasks} </span> 
            <button className='delete-btn'
                    onClick={() => deleteTask(index)}>
                    Delete
            </button>
            <button className='move-btn'
                    onClick={() => moveTaskUp(index)}>
                    UP
            </button>
            <button className='move-btn'
                    onClick={() => moveTaskDown(index)}>
                    DOWN
            </button>
        </li>)}
       </ol>        
    </div>
  )
}

export default ToDoList