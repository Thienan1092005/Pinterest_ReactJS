import { LiaPinterestP } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";

const navList = [
  {
    name: "Giới thiệu",
  },
  {
    name: "Doanh Nghiệp",
  },
  {
    name: "Blog",
  },
];

export default function NoLoginHeader({ setLogin }) {
  const Navigate = useNavigate();

  return (
    <div className="text-center z-20 font-[12px] items-center w-full h-[80px] px-[4px] py-[16px] fixed justify-between flex bg-white">
      <div className="flex items-center gap-x-[10px]">
        <Link to={"/"}>
          <LiaPinterestP className="text-[#e60023] items-center text-[40px]" />
        </Link>
        <h1 className="text-red-500 font-bold text-xl">Pinterest</h1>
      </div>
      <div>
        <ul className="flex gap-[30px] items-center font-bold text-[rgba(0,0,0,0.6)]">
          {navList.map((navItem, index) => (
            <li
              key={index}
              className=" hover:border-b-black transition-colors duration-300 border-b-2 border-b-transparent cursor-pointer py-2"
            >
              {navItem.name}
            </li>
          ))}

          <button
            onClick={() => {
              Navigate("/login");
            }}
            className=" hover:bg-red-600 transition-all duration-300 w-[100px] h-[40px] rounded-[15px] bg-red-500 text-white"
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => {
              Navigate("/regester");
            }}
            className=" hover:bg-gray-400 transition-all duration-300 w-[100px] h-[40px] rounded-[15px] bg-gray-300 text-black"
          >
            Đăng Ký
          </button>
        </ul>
      </div>
    </div>
  );
}
