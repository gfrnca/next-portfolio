import ContactInput from "@/src/components/atoms/ContactInput/ContactInput"
import { ContactFormWrapper } from "./ContactForm.styled"

const ContactForm = () => {
  return (
    <ContactFormWrapper>
        <ContactInput label="Nome" type="text" />
    </ContactFormWrapper>
  )
}

export default ContactForm