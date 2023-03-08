import { InputLabel } from "../ContactInput/ContactInput.styled"
import { TextAreaControl, TextAreaWrapper } from "./ContactTextArea.styled"

interface TextAreaProps {
  label: string;
}

const ContactTextArea = ({ label }: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <InputLabel>{label}</InputLabel>
      <TextAreaControl />
    </TextAreaWrapper>
  )
}

export default ContactTextArea