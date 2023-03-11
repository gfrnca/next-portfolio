import { ChangeEventHandler } from "react";
import { InputControl, InputLabel, InputWrapper } from "./ContactInput.styled";

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const ContactInput = ({
  label,
  type,
  placeholder,
  onChange,
  className,
}: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputControl
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </InputWrapper>
  );
};

export default ContactInput;
