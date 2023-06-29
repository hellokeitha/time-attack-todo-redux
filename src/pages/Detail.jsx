import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const { id } = useParams();
  const todo = todos.filter((todo) => todo.id === id)[0];

  return (
    <div>
      <h1>Detail</h1>
      {todo.id} | {todo.title} | {todo.isDone.toString()}
      <Link to={"/"} style={{ margin: "5px", color: "Green" }}>
        Back
      </Link>
    </div>
  );
};

export default Detail;
