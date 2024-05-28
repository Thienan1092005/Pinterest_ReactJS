import { BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import ImgComments from "./ImgComments.jsx";
/* eslint-disable react/prop-types */
export default function MediaInfomation({ imgData }) {
  return (
    <div className="px-8 py-[16px] max-h-full min-w-[300px] overflow-y-auto">
      <div className="title flex gap-4 items-center justify-between w-full mb-6 ">
        <div className="font-bold">
          <button className="mr-4">
            <FiShare className="w-6 h-6" />
          </button>
          <button>
            <BsThreeDots className="w-6 h-6" />
          </button>
        </div>
        <button className=" font-bold  bg-red-500 w-[60px] h-[40px] rounded-full text-white">
          Save
        </button>
      </div>
      <div className="">
        <h1 className="font-bold text-black text-2xl truncate break-words !line-clamp-2 whitespace-pre-line mb-4">
          {imgData?.name}
        </h1>
        {imgData?.desc.split("\\n").map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {/* Profile */}
      <div className="  my-[30px]">
        <div className="flex justify-between items-center h-auto">
          <div className=" gap-4 flex items-center">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src={
                imgData?.user?.avatar
                  ? imgData?.user?.avatar
                  : `https://ui-avatars.com/api/?name=${imgData?.user?.full_name}&rounded=true`
              }
              alt=""
            />
            <h1 className="  font-bold text-black">
              {imgData?.user?.full_name}
            </h1>
          </div>
          <button className="w-[90px] hover:bg-white border border-transparent hover:border-black hover:text-black transition-colors duration-300 rounded-[30px] h-[40px] bg-gray-900 text-white font-semibold">
            Theo doi
          </button>
        </div>
      </div>
      <ImgComments imgId={imgData?.img_id} />
    </div>
  );
}
