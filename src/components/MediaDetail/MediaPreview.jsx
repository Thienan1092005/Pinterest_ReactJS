/* eslint-disable react/prop-types */

import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function MediaPreview({ imgData }) {
  const navigate = useNavigate();
  return (
    <div className="relative w-auto h-auto get-shadow">
      <div className="relative">
        <img
          className="h-auto max-h-[700px] rounded-[25px]  object-cover"
          src={`http://pinterest.lucadev.tech${imgData?.url}`}
          alt=""
        />
        <div className="group absolute inset-0 h-full w-full px-[20px] opacity-0 hover:opacity-100 transition duration-500 ease-in-out rounded-[25px] bg-black bg-opacity-30">
          <button
            className="absolute opacity-0 -top-8 group-hover:opacity-100 group-hover:top-6 transition-all duration-500"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className="h-8 w-8 text-white" />
          </button>
          <a
            className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500"
            target="_blank"
            rel="noopner"
            href={`http://pinterest.lucadev.tech${imgData?.url}`}
          >
            <button className=" bg-white rounded-[20px] w-[150px] h-[40px] text-black font-bold">
              Xem hình ảnh
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
