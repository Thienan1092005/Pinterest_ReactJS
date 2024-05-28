import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import MediaDetail from "./components/MediaDetail";
import Login from "./components/Account/Login";
import Regester from "./components/Account/Regester";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/pin/:idImg" element={<MediaDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regester />} />
      </Routes>
    </BrowserRouter>
  );
}
