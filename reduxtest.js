const { createStore } = require("redux");

const initialState = {
  age: 21
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += action.val;
  } else if (action.type === "SUBTRACT") {
    newState.age -= action.val;
  }
  return newState;
};
const store = createStore(myReducer);

store.subscribe(() => {
  console.log("state changed" + JSON.stringify(store.getState()));
});

store.dispatch({ type: "ADD", val: 10 });
store.dispatch({ type: "ADD", val: 10 });
store.dispatch({ type: "ADD", val: 10 });
store.dispatch({ type: "ADD", val: 10 });
store.dispatch({ type: "SUBTRACT", val: 5 });
store.dispatch({ type: "SUBTRACT", val: 5 });
store.dispatch({ type: "SUBTRACT", val: 5 });
