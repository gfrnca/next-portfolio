// General
import { use, useState } from "react";

// CSS
import { ContactFormWrapper } from "./ContactForm.styled";

// Components
import { SubmitButton } from "@/src/components/atoms/Buttons/Buttons.styled";
import ContactInput from "@/src/components/atoms/ContactInput/ContactInput";
import ContactTextArea from "@/src/components/atoms/ContactTextArea/ContactTextArea";
import Separator from "@/src/components/atoms/Separator/Separator";

const ContactForm = () => {
  // Submit Button status
  const [submitButtonStatus, setSubmitButtonStatus] = useState(false);

  // Name fill status
  const [nameStatus, setNameStatus] = useState(false);

  // E-mail fill status
  const [emailStatus, setEmailStatus] = useState(false);

  // Message status
  const [messageStatus, setMessageStatus] = useState(false);

  // E-mail validation
  const checkEmail = (e: any) => {
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(e)) {
      setEmailStatus(false);
    } else {
      setEmailStatus(true);
    }
  };

  const checkErrors = () => {
    if (nameStatus && emailStatus && messageStatus) {
      setSubmitButtonStatus(true);
      console.log(submitButtonStatus);
    } else {
      setSubmitButtonStatus(false);
      console.log(submitButtonStatus);
    }
  };

  return (
    <ContactFormWrapper
      action="https://formsubmit.co/gabrielbfranca27@gmail.com"
      method="POST"
    >
      {/* Name */}
      <ContactInput
        className={nameStatus ? "filled" : ""}
        onChange={(e) => {
          e.target.value.length > 3
            ? setNameStatus(true)
            : setNameStatus(false);
          checkErrors();
        }}
        label="Name"
        name="name"
        type="text"
        placeholder="How you want to get called?"
      />

      {/* E-mail */}
      <ContactInput
        className={emailStatus ? "filled" : ""}
        onChange={(e) => {
          checkEmail(e.target.value);
          checkErrors();
        }}
        label="E-mail"
        type="email"
        name="email"
        placeholder="Your best e-mail"
      />

      {/* Message */}
      <ContactTextArea
        className={messageStatus ? "filled" : ""}
        onChange={(e) => {
          e.target.value.length > 3
            ? setMessageStatus(true)
            : setMessageStatus(false);
          checkErrors();
        }}
        name="message"
        placeholder="What you need to say?"
        label="Message"
      />

      <input type="hidden" name="_captcha" value="false" />

      {/* Submit Button */}
      <SubmitButton disabled={submitButtonStatus ? false : true} type="submit">
        Submit
      </SubmitButton>

      <div className="or">
        <h3>or</h3>
        <p>
          Send a message to <span>gabrielbfranca27@gmail.com</span>
        </p>
      </div>
    </ContactFormWrapper>
  );
};

export default ContactForm;
