import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardList = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>To Do List</h1>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <Link to={`/${todo.id}`}>Details</Link>| {todo.id} | {todo.title}{" "}
              | {todo.isDone.toString()}
              <button
                onClick={() => {
                  dispatch({
                    type: "SWITCH_TODO",
                    payload: todo.id,
                  });
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "DEL_TODO",
                    payload: todo.id,
                  });
                }}
              >
                삭제
              </button>
            </div>
          );
        })}

      <h1>Done List</h1>
      {todos
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <Link to={`/${todo.id}`}>Details</Link> | {todo.id} | {todo.title}{" "}
              <button
                onClick={() => {
                  dispatch({
                    type: "SWITCH_TODO",
                    payload: todo.id,
                  });
                }}
              >
                완료취소
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "DEL_TODO",
                    payload: todo.id,
                  });
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
