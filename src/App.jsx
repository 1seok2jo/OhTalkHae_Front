import {BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/member/Login";
import Register from "./pages/member/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainLayout />}  >
            <Route index element={ <Home /> } />
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
