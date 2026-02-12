import { FaShieldAlt } from "react-icons/fa";

const VerifyEmail = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <FaShieldAlt className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Verify OTP</h1>
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
    </>
  );
};

export default VerifyEmail;
