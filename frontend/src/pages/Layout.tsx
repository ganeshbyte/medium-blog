import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar.component";

export const Layout = () => {
  return (
    <div className="font-primary ">
      <Appbar></Appbar>
      <div className="ml-10 mr-10 lg:ml-15 lg:mr-15">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
