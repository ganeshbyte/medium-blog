import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>Heading</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
