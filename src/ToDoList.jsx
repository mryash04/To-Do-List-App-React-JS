import React from "react";
import {useState} from "react";

const ToDoList = (props) =>{

  return(<React.Fragment>
      <div className="items-list">
      <i class="fa fa-close" onClick={() =>{
          props.onSelect(props.id)
      }}></i>
      <li> {props.text} </li>
      </div>
  </React.Fragment>)
}

export default ToDoList;