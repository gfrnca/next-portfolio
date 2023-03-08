import { InputLabel } from "../ContactInput/ContactInput.styled"
import { TextAreaControl, TextAreaWrapper } from "./ContactTextArea.styled"

interface TextAreaProps {
  label: string;
  placeholder?: string;
}

const ContactTextArea = ({ label, placeholder }: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <InputLabel>{label}</InputLabel>
      <TextAreaControl placeholder={placeholder} />
    </TextAreaWrapper>
  )
}

export default ContactTextArea