import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MyHeader from "./components/MyHeader";
import ArrRoutes from "./components/MyRoutes";
import { ArrCompletedTasks } from "./components/context";
import { useState } from "react";

function App() {
  const [ArrCompletedTask, setCompletedTask] = useState([])

  return (
    <ArrCompletedTasks.Provider value={[ArrCompletedTask, setCompletedTask]}>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          {ArrRoutes.map((r) => (
            <Route
              key={r.path}
              path={r.path}
              Component={r.component}
              exact={r.exact}
            />
          ))}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ArrCompletedTasks.Provider>
  );
}

export default App;
