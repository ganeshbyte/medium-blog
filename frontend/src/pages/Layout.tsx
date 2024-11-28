import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="font-primary">
      <div>Heading</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
