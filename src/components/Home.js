import React, { useEffect, useState } from "react";
import Form from "./Form";
import ClearButton from "./ClearButton";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import { nanoid } from "nanoid";

const DATA = [
// { id: "todo-0", name: "Eat", completed: true },
// { id: "todo-1", name: "Sleep", completed: false },
// { id: "todo-2", name: "Repeat", completed: false }
];
    
const FILTER_MAP = {
  All: () => true,
  NotStarted: task => task.status=== 0,
  Started: task => task.status=== 1,
  Completed: task => task.status=== 2
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function Home(props) {
  const [tasks, setTasks] = useState(DATA);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const data = localStorage.getItem('taskData');
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
      localStorage.setItem('taskData', JSON.stringify(tasks))
  }, [tasks]);

  function addTask(name) {
    const newTask = { id: "todo-"+nanoid(), name: name, status: 0 };
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  }
  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, status: 2}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function toggleTaskStarted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, status: 1}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function toggleTaskNotStarted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, status: 0}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
  .filter(task => FILTER_MAP[filter](task))
  .map(task => (
    <Todo
        id={task.id}
        name={task.name}
        status={task.status}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        toggleTaskStarted={toggleTaskStarted}
        toggleTaskNotStarted={toggleTaskNotStarted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const headingText = `${taskList.length} tasks remaining`;

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask}/>
      <ClearButton setTasks={setTasks}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default Home;
