import React from "react";
import {useState} from "react";
import ToDoList from "./ToDoList.jsx";

const App = () =>{

  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems, inputList];
    })
    setInputList("");
  }

  const deleteItems = (id) =>{
    console.log("delete item");
    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) =>{
        return index!== id;
      })
    })
  }

  return(<React.Fragment>
    <div className = "main-div">
      <div className="center-div">
        <h2> ToDo List </h2>  <br />
        <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList} />
        <button onClick={listOfItems}> + </button>

        <ol>
          { items.map((itemVal, index) =>{
            return <ToDoList text={itemVal}
            key = {index}
            id={index} 
            onSelect={deleteItems} />
          }) }
        </ol>
      </div>
    </div>
  </React.Fragment>)
}

export default App;