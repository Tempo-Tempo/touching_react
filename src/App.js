import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import { ArrRoutes, beforeLoginRoutes } from "./components/MyRoutes/index";
import { isAuthContext } from "./components/context";
import { useContext } from "react";
import "./firebase";

function App() {
  const MyAuthContext = useContext(isAuthContext);
  return (
    <BrowserRouter>
      <MyHeader />
      {MyAuthContext.isAuth ? (
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
  );
}

export default App;
