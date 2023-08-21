import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import { ArrRoutes, beforeLoginRoutes } from "./components/MyRoutes/index";
import { ArrCompletedTasks } from "./components/context";
import { isAuthContext } from "./components/context";
import { useState } from "react";
import "./firebase";

function App() {
  const [ArrCompletedTask, setCompletedTask] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ArrCompletedTasks.Provider value={[ArrCompletedTask, setCompletedTask]}>
      <isAuthContext.Provider value={[isAuth, setIsAuth]}>
        <BrowserRouter>
          <MyHeader />
          {isAuth ? (
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
          ) : (
            <Routes>
              {beforeLoginRoutes.map((r) => (
                <Route
                  key={r.path}
                  path={r.path}
                  Component={r.component}
                  exact={r.exact}
                />
              ))}
              <Route path="/*" element={<Navigate to="/Login" replace />} />
            </Routes>
          )}
        </BrowserRouter>
      </isAuthContext.Provider>
    </ArrCompletedTasks.Provider>
  );
}

export default App;
