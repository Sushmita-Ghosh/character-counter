import BannerList from "../BannerList";
import DensityList from "../DensityList";
import Options from "../Options";
import ReadingTime from "../ReadingTime";
import TextInput from "../TextInput";
import { useText } from "../../context/TextContext";
import "./Main.css";
import { useState } from "react";
import { formatText } from "../../utils/formatText";

export default function Main() {
  const text = useText();

  // TODO:
  // Create state for:
  // - userinput
  // - nospace
  // - limit
  // - maxlength

  // TODO:
  // Compute:
  // - isLimitReached
  // - limit alert text

  const [content, setContent] = useState({
    userinput: "" /** actual user entered string */,
    nospace: false /** no space checkbox state */,
    limit: false /** limit checkbox state */,
    maxlength: null /** limit input value */,
  });

  /** If the userInput is greater than the maxLength user provided */
  const isLimitReached =
    content.userinput &&
    content.maxlength &&
    content.userinput.length > content.maxlength;

  /** Format text here gives the value for {max_length} in the text */
  const alertTemplate = text.limit_reached_alert;
  const limitAlert = formatText(alertTemplate, {
    max_length: content.maxlength,
  });

  console.log(isLimitReached, limitAlert, content);

  return (
    <main className="main">
      <h1 className="app-title">{text.app_title}</h1>

      <section>
        <TextInput
          /* TODO */
          content={content}
          setContent={setContent}
          isLimitReached={isLimitReached}
        />

        {/* TODO */}
        {/* limit reached alert */}
        {isLimitReached && <p className="limit-alert">{limitAlert}</p>}

        <div className="sub-input">
          <Options
            /* TODO */
            content={content}
            setContent={setContent}
          />
          <ReadingTime
            /* TODO */
            userinput={content.userinput}
          />
        </div>
      </section>

      <section>
        <BannerList
          /* TODO */
          userinput={content.userinput}
          nospace={content.nospace}
        />
      </section>

      <section>
        <h3 className="density-title">{text.density_title}</h3>

        {/* TODO */}
        {/* conditional density rendering */}
        <DensityList />
      </section>
    </main>
  );
}
