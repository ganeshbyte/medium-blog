import type { SigninType } from "@ganesh2111/common-app";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LabelledInput } from "../components/control/LabelledInput.component";
import { Quote } from "../components/Quote.component";
import { getBaseUrl } from "../utils/function";

export const Signin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SigninType>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${getBaseUrl()}/user/signin`, postInputs);
      if (res.status === 200) {
        localStorage.setItem("token", res.data?.jwt);
        Swal.fire({ title: "Singin Successful", icon: "success" });
        navigate("/blogs");
      } else {
        Swal.fire({
          title: "Something Went Wrong",
        });
      }
    } catch (error) {
      Swal.fire("Internal Server Error", "invalid", "error");
    }
  };
  return (
    <>
      <div className="flex">
        <div className="flex items-center justify-center h-screen lg:w-1/2 w-full">
          <div className="flex-col items-center justify-center p-2">
            <div className="text-2xl font-bold ">Login </div>
            <div className="mb-5">
              Not have an account?
              <span className="text-violet-600 underline cursor-pointer ">
                <Link to={"/signup"}>Signup</Link>
              </span>
            </div>

            <form action="">
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
                  className=" justify-center mt-3 text-white w-64 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                >
                  Signin.
                </button>
              </div>
            </form>
          </div>
        </div>
        <Quote></Quote>
      </div>
    </>
  );
};
