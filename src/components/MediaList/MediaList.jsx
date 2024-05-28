/* eslint-disable react/prop-types */

import MediaItem from "./MediaItem";

export default function MediaList({ handleLoadMore, dataImgs }) {
  return (
    <div className="flex z-[9999] flex-shrink-0 flex-wrap justify-start gap-x-[10px] fixed abs-center-x w-[80%] h-auto rounded-b-lg bg-white p-10 overflow-hidden gap-y-[55px]">
      {dataImgs?.data?.images.map((item, index) => {
        console.log(item.img_id);
        return (
          <MediaItem
            imgId={item.img_id}
            imgName={item.name}
            imgUrl={`http://pinterest.lucadev.tech:8080${item.url}`}
            key={index}
          />
        );
      })}
      <button
        onClick={handleLoadMore}
        className="  rounded-[10px] my-0 mx-auto border-solid relative bg-white  w-[160px] h-[40px] border-[1px] border-black  text-black text-xl font-bold"
      >
        Load more
      </button>
    </div>
  );
}
