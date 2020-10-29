import React, { useState } from "react";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [radio, setRadio] = useState(null);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  function handleOptionChange(e) {
    setRadio(e.target.value);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div>
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
          <p></p>
          <input
            id={props.id}
            type="radio"
            value="NotStarted"
            checked={radio === 'NotStarted'}
            onChange={(e) => {props.toggleTaskNotStarted(props.id); handleOptionChange(e)}}
          /> NotStarted
          <p></p>
          <input
            id={props.id}
            type="radio"
            value="Started"
            checked={radio === 'Started'}
            onChange={(e) => {props.toggleTaskStarted(props.id); handleOptionChange(e)}}
          /> Started
          <p></p>
          <input
            id={props.id}
            type="radio"
            value="Completed"
            checked={radio === 'Completed'}
            onChange={(e) => {props.toggleTaskCompleted(props.id); handleOptionChange(e)}}
          /> Completed 
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn"
            onClick={() => setEditing(true)}
          >
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
    </div>
  );

  return <li className="todo">
    {isEditing ? editingTemplate : viewTemplate}
  </li>;
  }