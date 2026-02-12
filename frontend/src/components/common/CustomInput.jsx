import { Label, TextInput } from "flowbite-react";

const CustomInput = ({ label, placeholder, name, ...rest }) => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor="email1">{label}</Label>
      </div>
      <TextInput
        id={label}
        type="text"
        name={name}
        placeholder={placeholder}
        required
        {...rest}
      />
    </>
  );
};

export default CustomInput;
