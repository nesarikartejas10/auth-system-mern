import { SiGnuprivacyguard } from "react-icons/si";
import CustomInput from "../components/common/CustomInput";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <SiGnuprivacyguard className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Register</h1>
      </div>

      <form className="flex max-w-md flex-col gap-4">
        <div>
          <CustomInput
            type="text"
            name="username"
            label="Username"
            placeholder="johndoe"
          />
        </div>
        <div>
          <CustomInput
            type="text"
            name="email"
            placeholder="johndoe@gmail.com"
            label="Email"
          />
        </div>
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
          Create an account
        </Button>
      </form>

      <div className="text-center pt-5">
        <span>You already have an account?</span>
        <Link to="/login" className="ml-2 text-cyan-800 hover:underline">
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;
