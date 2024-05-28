/* eslint-disable react/prop-types */
import { FaBell, FaFacebookMessenger } from "react-icons/fa";
import MediaList from "./MediaList";
import { LiaPinterestP } from "react-icons/lia";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getFullImage, getImgAPI } from "../APIS/imagesAPI";
import { Link } from "react-router-dom";

export default function Header() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);
  let i = 2;
  const handleLoadMore = async () => {
    const moreImg = await getFullImage(i);
    i += 1;
    if (Array.isArray(data) && moreImg.data.images) {
      setData([...data, ...moreImg.data.images]);
    } else if (!data && moreImg.data.images) {
      setData([...moreImg.data.images]);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getImgAPI(debouncedSearchValue);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [debouncedSearchValue]);
  return (
    <div className="">
      <nav className="text-center z-20 font-[12px] items-center w-full h-[80px] px-[4px] py-[16px] fixed justify-around flex bg-white">
        <Link to={"/"}>
          <LiaPinterestP className="text-[#e60023] text-[40px]" />
        </Link>
        <Link to={"/"}>
          <button className="flex items-center justify-center bg-black font-[600] text-white p-[16px] h-full w-[120px] rounded-[25px]">
            Trang chủ
          </button>
        </Link>
        <h1 className="text-xl font-bold text-black">Upload</h1>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={() => setSearch(true)}
          placeholder="search for your picture"
          className="px-[10px] placeholder:italic placeholder:text-slate-400 hover:bg-[#DBDBDB] bg-[#f1f1f1] rounded-[25px] outline-none w-[80%] h-full"
          type="text"
        />
        <div className="relative rounded-full w-[48px] h-[48px] hover:bg-[#DBDBDB]">
          <FaBell className="text-black text-[24px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2" />
        </div>
        <div className="relative rounded-full w-[48px] h-[48px] hover:bg-[#DBDBDB]">
          <FaFacebookMessenger className="text-black text-[24px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2" />
        </div>
        <img
          className="w-[24px] rounded-full h-[24px] object-cover"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5c665fe-7090-4faa-8b63-66fef2f438d4/dew4djq-9fa4c2a5-0e2a-41a1-9ed8-4b7b745cac57.png/v1/fill/w_1280,h_1804,q_80,strp/raiden_ei_by_tiribrush_dew4djq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwNCIsInBhdGgiOiJcL2ZcL2U1YzY2NWZlLTcwOTAtNGZhYS04YjYzLTY2ZmVmMmY0MzhkNFwvZGV3NGRqcS05ZmE0YzJhNS0wZTJhLTQxYTEtOWVkOC00YjdiNzQ1Y2FjNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TIuyL4IGRTC5Pf68fvcj1D9-eQIzdwW5rRqt_EbMbJM"
          alt="User"
        />
      </nav>
      {search && <MediaList handleLoadMore={handleLoadMore} dataImgs={data} />}
      <SearchOverlay search={search} setSearch={setSearch} />
    </div>
  );
}

function SearchOverlay({ search, setSearch }) {
  return (
    <div
      onClick={() => setSearch(false)}
      className={`h-screen z-[2] fixed w-screen ${
        search ? "block" : "hidden "
      } bg-[rgba(0,0,0,0.5)]`}
    ></div>
  );
}
