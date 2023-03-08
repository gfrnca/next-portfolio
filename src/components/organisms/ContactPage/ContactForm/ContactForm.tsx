import { SubmitButton } from "@/src/components/atoms/Buttons/Buttons.styled"
import ContactInput from "@/src/components/atoms/ContactInput/ContactInput"
import ContactTextArea from "@/src/components/atoms/ContactTextArea/ContactTextArea"
import { ContactFormWrapper } from "./ContactForm.styled"

const ContactForm = () => {
  return (
    <ContactFormWrapper>
        {/* Name */}
        <ContactInput label="Name" type="text" placeholder="How you want to be called?" />

        {/* E-mail */}
        <ContactInput label="E-mail" type="email" placeholder="Your best e-mail" />
        
        {/* Message */}
        <ContactTextArea label="Message" />

        {/* Submit Button */}
        <SubmitButton>Submit</SubmitButton>
    </ContactFormWrapper>
  )
}

export default ContactForm