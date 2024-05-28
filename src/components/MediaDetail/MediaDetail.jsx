import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { getDetailByImgID } from "../../APIS/imagesAPI";
import MediaPreview from "./MediaPreview";
import MediaInfomation from "./MediaInfomation";
import MainImgList from "../MediaList/MainImgList";

export default function MediaDetail() {
  const { idImg } = useParams();
  const [imgDetailData, setImgDetailData] = useState(null);

  useEffect(() => {
    const getImgData = async () => {
      try {
        const imgData = await getDetailByImgID(idImg);
        setImgDetailData(imgData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImgData();
  }, [idImg]);

  return (
    <>
      <Header />
      <div className="pt-[80px] h-dvh flex flex-col justify-center items-center">
        <div className=" min-height-[300px] max-w-[1000px] w-auto flex items-center h-auto bg-white rounded-[25px] get-shadow">
          <MediaPreview imgData={imgDetailData} />
          <MediaInfomation imgData={imgDetailData} />
        </div>
      </div>
      <MainImgList />
    </>
  );
}
