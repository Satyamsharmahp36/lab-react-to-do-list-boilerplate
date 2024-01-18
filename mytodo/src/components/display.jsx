import React from "react"

function Display(props) {
    let newArray = props.todoArray
    const updatedArray = newArray.map((e)=>{
      return(
        <div key={e.key} id="mainDiv">
          <input type="text" id={e.key} value={e.discription} onChange={(events)=>{
            props.handleUpdate(events.target.value,e.key)
          }}></input>
          <button key={e.key} onClick={()=>{
            props.handleDelete(e.key)
          }}>
            Delete Todo
          </button>
        </div>
        
        
      )
    })

  return (

    <div>
      {updatedArray}

    </div>
  )
}

export default Display