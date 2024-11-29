import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar.component";

export const Layout = () => {
  return (
    <div className="font-primary">
      <Appbar></Appbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
