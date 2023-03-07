import { InputControl, InputLabel, InputWrapper } from "./ContactInput.styled"

interface InputProps {
    label: string;
    type: string;
}



const ContactInput = ({ label, type }: InputProps) => {
  return (
    <InputWrapper>
        <InputLabel>{label}</InputLabel>
        <InputControl type={type} />
    </InputWrapper>
  )
}

export default ContactInput