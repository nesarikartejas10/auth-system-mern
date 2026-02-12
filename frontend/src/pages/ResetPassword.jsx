import { Button } from "flowbite-react";
import { MdLockReset } from "react-icons/md";
import { Link } from "react-router-dom";
import CustomInput from "../components/common/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <MdLockReset className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Reset Your Password</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            placeholder="password"
          />
        </div>
        <div>
          <CustomInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="password"
          />
        </div>

        <Button type="submit" className="font-bold cursor-pointer" color="cyan">
          Reset Password
        </Button>
      </form>
      <div className="text-center pt-5">
        <span>Remembered your password ?</span>
        <Link to="/login" className="ml-2 text-cyan-800 hover:underline">
          Login
        </Link>
      </div>
    </>
  );
};

export default ResetPassword;
