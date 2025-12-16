/**
 * This component renders the user input textarea and handles input changes
 * also applies class to textarea when limit is reached
 */

import { useText } from "../../context/TextContext";
import "./TextInput.css";

export default function TextInput({ content, setContent, isLimitReached }) {
  const text = useText();

  // TODO:
  // Receive props
  // - content
  // - setContent
  // - isLimitReached

  // TODO:
  // Handle input change

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setContent((prev) => ({
      ...prev,
      userinput: event.target.value,
    }));
  };

  const limitClass = isLimitReached ? "limit-reached" : "no-limit";

  return (
    <label>
      <textarea
        name="userinput"
        id="userinput"
        placeholder={text.input_placeholder}
        className={`text-input ${limitClass}`}
        value={content.userinput}
        maxLength={content.maxlength}
        onChange={handleInputChange}
      />
    </label>
  );
}
