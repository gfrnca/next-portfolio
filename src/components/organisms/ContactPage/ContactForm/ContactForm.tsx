import { SubmitButton } from "@/src/components/atoms/Buttons/Buttons.styled"
import ContactInput from "@/src/components/atoms/ContactInput/ContactInput"
import ContactTextArea from "@/src/components/atoms/ContactTextArea/ContactTextArea"
import { useState } from "react"
import { ContactFormWrapper } from "./ContactForm.styled"

const ContactForm = () => {
  const [nameStatus, setNameStatus] = useState(false);

  return (
    <ContactFormWrapper>
        {/* Name */}
        <ContactInput className={nameStatus ? 'filled' : ''} onChange={(e) => {e.target.value.length > 3 && setNameStatus(true)}} label="Name" type="text" placeholder="How you want to be called?" />

        {/* E-mail */}
        <ContactInput label="E-mail" type="email" placeholder="Your best e-mail" />
        
        {/* Message */}
        <ContactTextArea placeholder="What you need to say?" label="Message" />

        {/* Submit Button */}
        <SubmitButton>Submit</SubmitButton>
    </ContactFormWrapper>
  )
}

export default ContactForm