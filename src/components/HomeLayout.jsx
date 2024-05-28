import { useState } from "react";
import Header from "./Header";
import MainImgList from "./MediaList/MainImgList";
import NoLoginHeader from "./NoLoginHeader.jsx";

export default function HomeLayout() {
  const [login, setLogin] = useState(true);
  return (
    <div className="w-screen min-h-screen h-auto relative">
      {login ? <Header /> : <NoLoginHeader setLogin={setLogin} />}
      {login ? <MainImgList /> : <div></div>}
    </div>
  );
}
