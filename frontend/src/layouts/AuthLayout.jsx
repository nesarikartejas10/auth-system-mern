import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="sm:w-md w-full px-10 py-20">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
