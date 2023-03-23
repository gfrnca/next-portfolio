import { ChangeEventHandler } from "react";
import { InputControl, InputLabel, InputWrapper } from "./ContactInput.styled";

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  name?: string;
}

const ContactInput = ({
  label,
  type,
  placeholder,
  onChange,
  className,
  name,
}: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputControl
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </InputWrapper>
  );
};

export default ContactInput;
