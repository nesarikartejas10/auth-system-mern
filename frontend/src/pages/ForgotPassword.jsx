import { FaKey } from "react-icons/fa";
import CustomInput from "../components/common/CustomInput";
import { Button } from "flowbite-react";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <FaKey className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Forgot Password</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div className="text-gray-700">
          Enter the email associated with your account to change your password.
        </div>
        <div>
          <CustomInput
            type="text"
            name="email"
            placeholder="name@gmail.com"
            label="Email"
          />
        </div>

        <Button type="submit" className="font-bold cursor-pointer" color="cyan">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ForgotPassword;
