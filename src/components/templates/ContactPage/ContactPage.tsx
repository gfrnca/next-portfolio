import { Container } from "@/src/styles/global"
import ContactForm from "../../organisms/ContactPage/ContactForm/ContactForm"
import { ContactPageWrapper } from "./ContactPage.styled"

const ContactPage = () => {
  return (
    <ContactPageWrapper>
        <Container className="container">
            <ContactForm />
        </Container>
    </ContactPageWrapper>
  )
}

export default ContactPage