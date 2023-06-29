import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Form = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  console.log(title);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch({
            type: "ADD_TODO",
            payload: {
              id: shortid.generate(),
              title,
              isDone: false,
            },
          });

          setTitle("");
        }}
      >
        <input
          placeholder="Add what to do"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>
      <button>save</button>
    </div>
  );
};

export default Form;
