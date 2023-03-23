import { InputLabel } from "../ContactInput/ContactInput.styled";
import { TextAreaControl, TextAreaWrapper } from "./ContactTextArea.styled";

interface TextAreaProps {
  label: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  name?: string;
}

const ContactTextArea = ({
  label,
  placeholder,
  onChange,
  className,
  name,
}: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <InputLabel>{label}</InputLabel>
      <TextAreaControl
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </TextAreaWrapper>
  );
};

export default ContactTextArea;
