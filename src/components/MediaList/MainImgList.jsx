import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImgBox from "./ImgBox";
import { getFullImage } from "../../APIS/imagesAPI";
import Masonry from "@mui/lab/Masonry";

export default function MainImgList() {
  const [allImgList, setAllImageList] = useState([]);
  // const [baseData, setBaseData] = useState(null);
  const [currentPage] = useState(1);

  const getFulImg = async (page) => {
    try {
      const data = await getFullImage(page || currentPage);
      setAllImageList((prev) => {
        console.log([...prev, ...data.data.images]);
        return [...prev, ...data.data.images];
      });
      return data.data.images;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFulImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className=" z-[1] py-[84px] w-full h-auto px-[16px] relative text-3xl font-bold text-black gap-x-[15px]">
        <div className="flex justify-start gap-5 flex-wrap w-full">
          <Masonry columns={7} spacing={2}>
            {allImgList.map((item, index) => {
              return (
                <Link key={index} to={`/pin/${item.img_id}`}>
                  <ImgBox
                    id_img={item.img_id}
                    desc={item.name}
                    imgUrl={`https://pinterest.lucadev.tech${item.url}`}
                  />
                </Link>
              );
            })}
          </Masonry>
        </div>
      </div>
    </>
  );
}
