import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ImgBox({ id_img, imgUrl, desc }) {
  return (
    <Link to={`${imgUrl}`}>
      <div className="relative w-auto flex h-auto bg-gray-100 rounded-[25px] overflow-hidden">
        <img
          className=" h-auto w-full object-cover transition duration-500 ease-in-out transform hover:opacity-50"
          src={imgUrl}
          alt=""
        />
        <div className=" px-[10px] absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-black bg-opacity-50">
          <span className="text-white text-lg">{desc}</span>
        </div>
      </div>
    </Link>
  );
}
