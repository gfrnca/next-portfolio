import { InputControl, InputLabel, InputWrapper } from "./ContactInput.styled"

interface InputProps {
    label: string;
    type: string;
    placeholder?: string;
}



const ContactInput = ({ label, type, placeholder }: InputProps) => {
  return (
    <InputWrapper>
        <InputLabel>{label}</InputLabel>
        <InputControl placeholder={placeholder} type={type} />
    </InputWrapper>
  )
}

export default ContactInput