import { useState } from "react";
import NoLoginHeader from "../NoLoginHeader";
import { InputGroup } from "./Login";
import { LiaPinterestP } from "react-icons/lia";

export default function Regester() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <NoLoginHeader />
      <div className="pt-[80px] w-screen flex  justify-center">
        <div className=" items-center  gap-y-[15px]  flex flex-col">
          <LiaPinterestP className="text-[50px]" />
          <h1 className="mb-[15px] font-bold text-2xl">
            Chào mừng đến Printerrest
          </h1>
          <InputGroup
            labelText="Email"
            name="email"
            onChange={handleInputChange}
            placeholder="abc@gmail.com"
          />
          <InputGroup
            labelText="Password"
            name="Password"
            onChange={handleInputChange}
            placeholder="ayuki123"
            type="password"
          />
          <InputGroup
            labelText="Name"
            name="name"
            onChange={handleInputChange}
            placeholder="dev yuki"
          />
          <InputGroup
            labelText="Age"
            name="age"
            onChange={handleInputChange}
            placeholder="18"
          />
          <InputGroup
            labelText="Email"
            name="email"
            onChange={handleInputChange}
            placeholder="abc@gmail.com"
          />
          <button className=" text-white p-[10px] w-[268px] h-[50px] rounded-[20px] bg-red-600 mt-[15px]">
            Regester
          </button>
        </div>
      </div>
    </div>
  );
}
