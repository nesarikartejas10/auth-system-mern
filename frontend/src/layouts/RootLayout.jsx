import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const RootLayout = () => {
  return (
    <>
      <div className="container pt-10 mx-auto">
        <NavigationBar />
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
