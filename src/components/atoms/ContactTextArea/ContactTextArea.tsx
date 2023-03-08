import { InputLabel } from "../ContactInput/ContactInput.styled"
import { TextAreaControl, TextAreaWrapper } from "./ContactTextArea.styled"

const ContactTextArea = () => {
  return (
    <TextAreaWrapper>
      <InputLabel>Teste</InputLabel>
      <TextAreaControl />
    </TextAreaWrapper>
  )
}

export default ContactTextArea