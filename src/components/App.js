
import React, { useState, useRef, useMemo } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { add_todo, del_todo, update_todo } from "../Redux/action/todoActionCreator.js";

const App = () => {
  let refObj = useRef("")
  let [update, setUpdate] = useState(null)
  let [flag, setFlag] = useState(false)
  let [x, setX] = useState("")
  let { list } = useSelector(state => state)
  let dispatch = useDispatch()


  // console.log(list);


  function handleadd() {

    dispatch(add_todo({ id: Date.now(), task: refObj.current.value }))
    refObj.current.value = ""
  }




  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ textAlign: "center" }}>TODO_LIST</h2>

        <div className="add_tasks_section"> {/* ADD THIS */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleadd();
            }}
          >
            <input type="text" ref={refObj} />
            <button>Submit</button>
          </form>
        </div>

        <div className="tasks_section"> {/* ADD THIS */}
          <ul>
            {list &&
              list.map((v, i) => {
                return (
                  <li key={i}>
                    {flag && update.id == v.id ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          dispatch(update_todo(update.id, x));
                          setFlag(false);
                        }}
                      >
                        <input
                          type="text"
                          onChange={(e) => {
                            setX(e.target.value);
                          }}
                          value={x}
                        />
                        <button className="save" >save</button>
                      </form>
                    ) : (
                      <div>
                        <p className="task">{v.task}</p>
                        <button
                        className="edit"
                          onClick={() => {
                            setFlag(true);
                            setX(v.task);
                            setUpdate(v);
                          }}
                        >
                          EDIT
                        </button>
                        <button
                        className="delete"
                          onClick={() => {
                            dispatch(del_todo(v.id));
                          }}
                        >
                          DELETE
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
