import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar.component";

export const Layout = () => {
  return (
    <div className="font-primary">
      <Appbar></Appbar>
      <div className=" ml-20 mr-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
