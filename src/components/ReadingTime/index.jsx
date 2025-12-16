import { useText } from "../../context/TextContext";
import "./ReadingTime.css";

export default function ReadingTime() {
  const text = useText();
  // console.log(text);

  // TODO:
  // Receive userinput
  // Calculate reading time
  // Format text

  return <div className="reading-time"></div>;
}
