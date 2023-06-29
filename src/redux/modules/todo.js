import shortid from "shortid";

// 데이터 초기값
const initialState = [
  {
    id: shortid.generate(),
    title: "Sample Title 1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "Sample Title 2",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "Sample Title 3",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "Sample Title 4",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "Sample Title 5",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DEL_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
