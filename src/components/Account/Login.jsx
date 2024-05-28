/* eslint-disable react/prop-types */
import { LiaPinterestP } from "react-icons/lia";
import { useState } from "react";
import NoLoginHeader from "../NoLoginHeader";
import { validate } from "../../Helper";
import { userLoginAPI } from "../../APIS/accountAPI";

export default function Login() {
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
  const handleLogin = (mail, pass, rePass) => {
    if (validate(mail, pass, rePass)) {
      const handleLogin = async () => {
        try {
          const loginState = await userLoginAPI(
            formValues.email,
            formValues.password
          );
          console.log(loginState);
        } catch (error) {
          console.log(error);
        }
      };
      handleLogin();
    }
  };
  return (
    <div>
      <NoLoginHeader />
      <div className="pt-[80px]">
        <div className="flex mt-[15px] flex-col items-center">
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
            name="password"
            onChange={handleInputChange}
            placeholder="yuki123"
            type="password"
          />
          <InputGroup
            labelText="Comfim password"
            name="rePassword"
            onChange={handleInputChange}
            placeholder="yuki123"
            type="password"
          />
          <button
            onClick={() => {
              handleLogin(
                formValues.email,
                formValues.password,
                formValues.rePassword
              );
            }}
            className=" text-white p-[10px] w-[268px] h-[50px] rounded-[20px] bg-red-600 mt-[15px]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export function InputGroup({ labelText, ...props }) {
  return (
    <div>
      <label className="block b-[5px] mb-2" htmlFor="">
        {labelText}
      </label>
      <input
        className=" focus:border-red-500 p-[10px] w-[268px] h-[50px] rounded-lg border-[2px] border-pink-500"
        {...props}
        type={props?.type || "text"}
      />
    </div>
  );
}
