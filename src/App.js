import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MyHeader from "./components/MyHeader";
import ArrRoutes from "./components/MyRoutes";



function App() {
  return (
    <BrowserRouter>
      <MyHeader/>
      <Routes>
        {ArrRoutes.map((r) => 
          <Route key={r.path} path={r.path} Component={r.component} exact={r.exact}/>
        )}
        <Route  path="/*" element={<Navigate to="/" replace/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
