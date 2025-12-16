// import { useEffect } from "react";
import { useText } from "../../context/TextContext";
import Checkbox from "./Checkbox";
import "./Options.css";

export default function Options({ content, setContent }) {
  const text = useText();

  // TODO:
  // Receive props
  // - content
  // - setContent

  // TODO:
  // Handle checkbox changes
  // Handle max length input

  const handleCheckboxChange = (e) => {
    // console.log(e.target);
    if (e.target.id === "nospace") {
      setContent((prev) => ({
        ...prev,
        nospace: e.target.checked,
      }));
    } else if (e.target.id === "limit") {
      setContent((prev) => ({
        ...prev,
        limit: e.target.checked,
      }));
    }
  };

  const handleMaxLengthChange = (e) => {
    // console.log("Type of", typeof e.target.value);
    setContent((prev) => ({
      ...prev,
      maxlength: e.target.value,
    }));
  };

  /** DEBUGGING */
  // useEffect(() => {
  //   console.log(content.nospace);
  //   console.log(content.limit);
  //   console.log(content.maxlength);
  // }, [content]);

  return (
    <div className="options">
      <Checkbox
        id="nospace"
        label={text.option_title_excl_space}
        className="space-option"
        checked={content.nospace}
        handleChange={handleCheckboxChange}
      />

      <div className="limit-option-container">
        <Checkbox
          id="limit"
          label={text.option_title_char_limit}
          className="limit-option"
          checked={content.limit}
          handleChange={handleCheckboxChange}
        />

        {/* TODO */}
        {/* conditionally render max length input */}
        {content.limit && (
          <input
            type="number"
            onChange={handleMaxLengthChange}
            className="max-length"
            value={content.maxlength}
          />
        )}
      </div>
    </div>
  );
}
