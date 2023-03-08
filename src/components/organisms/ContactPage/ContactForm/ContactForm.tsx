import ContactInput from "@/src/components/atoms/ContactInput/ContactInput"
import ContactTextArea from "@/src/components/atoms/ContactTextArea/ContactTextArea"
import { ContactFormWrapper } from "./ContactForm.styled"

const ContactForm = () => {
  return (
    <ContactFormWrapper>
        {/* Name */}
        <ContactInput label="Name" type="text" placeholder="How you want to be called?" />
        <ContactInput label="E-mail" type="email" placeholder="Your best e-mail" />
        
        <ContactTextArea label="Message" />


    </ContactFormWrapper>
  )
}

export default ContactForm