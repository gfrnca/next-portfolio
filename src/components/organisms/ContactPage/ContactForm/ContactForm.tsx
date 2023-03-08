// General
import { use, useState } from "react"

// CSS
import { ContactFormWrapper } from "./ContactForm.styled"

// Components
import { SubmitButton } from "@/src/components/atoms/Buttons/Buttons.styled"
import ContactInput from "@/src/components/atoms/ContactInput/ContactInput"
import ContactTextArea from "@/src/components/atoms/ContactTextArea/ContactTextArea"

const ContactForm = () => {
  // Name fill status
  const [nameStatus, setNameStatus] = useState(false);

  // E-mail fill status
  const [emailStatus, setEmailStatus] = useState(false);

  // E-mail validation
  const checkEmail = (e: any) => {
    const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(e)) {
      setEmailStatus(false)
    } else {
      setEmailStatus(true)
    }
  }

  return (
    <ContactFormWrapper>
        {/* Name */}
        <ContactInput className={nameStatus ? 'filled' : ''} onChange={(e) => {e.target.value.length > 3 && setNameStatus(true)}} label="Name" type="text" placeholder="How you want to be called?" />

        {/* E-mail */}
        <ContactInput className={emailStatus ? 'filled' : ''} onChange={(e) => checkEmail(e.target.value)} label="E-mail" type="email" placeholder="Your best e-mail" />
        
        {/* Message */}
        <ContactTextArea placeholder="What you need to say?" label="Message" />

        {/* Submit Button */}
        <SubmitButton>Submit</SubmitButton>
    </ContactFormWrapper>
  )
}

export default ContactForm