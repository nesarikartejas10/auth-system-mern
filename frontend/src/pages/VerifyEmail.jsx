import { Button } from "flowbite-react";
import { FaShieldAlt } from "react-icons/fa";

const VerifyEmail = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <FaShieldAlt className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Verify Email By OTP</h1>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div className="flex justify-center mb-2 space-x-2 rtl:space-x-reverse">
          {[...Array(6)].map((_, index) => (
            <div key={index + 1}>
              <label htmlFor={`code-${index + 1}`} className="sr-only">
                Code {index + 1}
              </label>
              <input
                type="text"
                maxLength="1"
                data-focus-input-init
                data-focus-input-next="code-2"
                id={`code-${index + 1}`}
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
          ))}
        </div>

        <Button type="submit" className="font-bold cursor-pointer" color="cyan">
          Verify Email OTP
        </Button>
      </form>
      <div className="text-center pt-5 text-gray-700">
        <span>Please introduce 6 digit code we sent via email.</span>
      </div>
    </>
  );
};

export default VerifyEmail;
