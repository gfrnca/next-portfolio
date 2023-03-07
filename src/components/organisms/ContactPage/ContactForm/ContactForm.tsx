import ContactInput from "@/src/components/atoms/ContactInput/ContactInput"
import { ContactFormWrapper } from "./ContactForm.styled"

const ContactForm = () => {
  return (
    <ContactFormWrapper>
        <ContactInput label="Nome" type="text" />
        <ContactInput label="E-mail" type="email" />
    </ContactFormWrapper>
  )
}

export default ContactForm