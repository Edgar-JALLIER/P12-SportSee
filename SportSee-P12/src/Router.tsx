import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";

const Router = () => {
  return (
    <BrowserRouter basename="/P12-SportSee">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
