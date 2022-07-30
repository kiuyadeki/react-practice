import React from "react";

export const CompleteTodos = (props) => {
  const {todos, onClickIncomplete} = props;
  return (
    <div className="complete-area">
      <p className="title">完了済のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickIncomplete(index)}>戻す</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
