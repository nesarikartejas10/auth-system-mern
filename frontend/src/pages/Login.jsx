import { FaTableCellsRowUnlock } from "react-icons/fa6";
import { Button, Checkbox, Label } from "flowbite-react";
import CustomInput from "../components/common/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <FaTableCellsRowUnlock className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Login</h1>
      </div>

      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            type="text"
            name="email"
            placeholder="name@gmail.com"
            label="Email"
          />
        </div>
        <div>
          <CustomInput type="password" name="password" label="Password" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Link
            to="/forgot-password"
            className="text-center text-cyan-800 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <Button type="submit" className="font-bold cursor-pointer" color="cyan">
          Login
        </Button>
      </form>

      <div className="text-center pt-5">
        <span>You don't have an account?</span>
        <Link to="/register" className="ml-2 text-cyan-800 hover:underline">
          Register
        </Link>
      </div>
    </>
  );
};

export default Login;
