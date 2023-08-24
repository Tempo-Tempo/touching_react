import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./components/Provider/AuthProvider";
import { Provider } from "react-redux";
import store from "./components/store";
// import { createStore } from "redux";


// const defaultState = {
//   arrCompleted: [],
// };

// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         arrCompleted: state.arrCompleted.push(action.payload.taskCompleted),
//       };
//     case "REMOVE_TASK":
//       return {
//         ...state,
//         arrCompleted: state.arrCompleted.filter(
//           (t) => t !== action.payload.taskCompleted
//         ),
//       };
//   }
// };

// const store = createStore(reducer);

// console.log(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
 </Provider>
);
