import { useText } from "../../context/TextContext";
import { formatText } from "../../utils/formatText";
import "./ReadingTime.css";
import { getReadingTime } from "./readingTimeUtils";

export default function ReadingTime({ userinput }) {
  const text = useText();
  // console.log(text);

  // TODO:
  // Receive userinput
  // Calculate reading time
  // Format text

  const displayText = text.reading_time_display;
  const displayMap = text.reading_time_value;
  console.log(displayMap);

  const readTimeValue = getReadingTime(userinput, 200);
  console.log(readTimeValue);

  const readingText = formatText(
    displayText,
    { reading_time_value: readTimeValue },
    { reading_time_value: displayMap }
  );

  return <div className="reading-time">{readingText}</div>;
}
