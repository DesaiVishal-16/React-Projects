
import { useEffect, useState } from 'react';
import Header from './Header';
import InputAddTask from './InputAddTask';
import Lists from './Lists';


const ToDoLists = () => {

const [todos, setTodos] = useState(()=>{
  const localVal =localStorage.getItem("ITEMS")
  if(localVal===null)return []
  return JSON.parse(localVal)

});

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addToDo(title){
    setTodos(currentTodos => {
        const newTodo = { id:crypto.randomUUID(), title, completed: false };
        const updatedTodos = [...currentTodos, newTodo];
        return updatedTodos;
      });
    }
  
  function handleChecked(event,todoId) {
    const checkboxChecked = event.target.checked;
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: checkboxChecked};
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  
  function handleDeleteTask(todoId){
   setTodos(prevTodo=>prevTodo.filter(todo=>todo.id!==todoId)
   )
  }
  return (
    <div id="todolists" className='itim-regular'>

    <Header/>

    <InputAddTask onClick={addToDo}/>

     <Lists todos={todos} handleChecked={handleChecked} handleDeleteTask={handleDeleteTask}/>
  </div>
  )
}


export default ToDoLists