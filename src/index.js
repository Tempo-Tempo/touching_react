import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./components/Provider/AuthProvider";
import { Provider } from "react-redux";
import store from "./components/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
 </Provider>
);
