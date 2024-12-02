import type { SignupType } from "@ganesh2111/common-app";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { getBaseUrl } from "../utils/function";
import { LabelledInput } from "./control/LabelledInput.component";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      if (type === "signup") {
        const res = await axios.post(`${getBaseUrl()}/user/signup`, postInputs);

        localStorage.setItem("token", res?.data?.token);
      }
    } catch (error) {
      Swal.fire("Internal Server Error", "invalid", "error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen lg:w-1/2 w-full">
      <div className="flex-col items-center justify-center p-2">
        <div className="text-2xl font-bold ">Create An Account</div>
        <div className="mb-5">
          Already have an account?
          <span className="text-violet-600 underline cursor-pointer ">
            Signin
          </span>
        </div>

        <form action="">
          <div>
            <LabelledInput
              id="email"
              label="Username"
              placeholder="Username"
              type="text"
              name="name"
              onChange={(e) => {
                setPostInputs((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
            ></LabelledInput>
          </div>

          <div>
            <LabelledInput
              id="email"
              label="Email"
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => {
                setPostInputs((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                });
              }}
            ></LabelledInput>
          </div>

          <div>
            <LabelledInput
              id="password"
              label="Password"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => {
                setPostInputs((prev) => {
                  return {
                    ...prev,
                    password: e.target.value,
                  };
                });
              }}
            ></LabelledInput>
          </div>

          <div className="flex items-center justify-center mt-3 ">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" justify-center mt-3 text-white w-64 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
