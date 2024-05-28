import { useEffect, useState } from "react";
import { getCommentsByImgID } from "../../APIS/imagesAPI";

export default function ImgComments({ imgId }) {
  const [commentsData, setCommentsData] = useState([]);
  const defautAvcatar =
    "https://i.pinimg.com/736x/49/e5/85/49e5858774a2c2d295ec4b7166a94ff8.jpg";
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getCommentsByImgID(imgId);
        setCommentsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [imgId]);
  return (
    <div className="h-auto overflow-auto">
      {commentsData.map((item, index) => {
        console.log(item.user.avatar);
        return (
          <div
            className=" mb-[10px] flex-wrap items-center flex gap-x-[5px]"
            key={index}
          >
            {/* user profie  */}
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={item.user.avatar || defautAvcatar}
              alt=""
            />
            <h5 className="font-bold">{item.user.full_name}</h5>
            <h5 className=" ml-[40px] text-wrap max-w-[500px]">
              {item.content}
            </h5>
          </div>
        );
      })}
    </div>
  );
}
