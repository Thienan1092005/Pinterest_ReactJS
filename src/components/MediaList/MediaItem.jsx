import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function MediaItem({ imgUrl, imgName, imgId }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/pin/${imgId}`);
      }}
      className="flex items-center w-[24%] h-[140px] bg-[#f5f5f5] rounded-r-[25px]"
    >
      <div className="h-full w-[150px] overflow-hidden rounded-[5px]">
        <img className="h-full object-cover" src={imgUrl} alt="" />
      </div>
      <h1 className="text-black font-bold ml-2">{imgName}</h1>
    </div>
  );
}
