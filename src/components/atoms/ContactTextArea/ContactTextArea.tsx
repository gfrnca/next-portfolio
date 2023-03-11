import { InputLabel } from "../ContactInput/ContactInput.styled";
import { TextAreaControl, TextAreaWrapper } from "./ContactTextArea.styled";

interface TextAreaProps {
  label: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
}

const ContactTextArea = ({
  label,
  placeholder,
  onChange,
  className,
}: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <InputLabel>{label}</InputLabel>
      <TextAreaControl
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
    </TextAreaWrapper>
  );
};

export default ContactTextArea;
