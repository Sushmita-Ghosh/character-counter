import Banner from "./Banner";
import "./BannerList.css";
import { useText } from "../../context/TextContext";

export default function BannerList({ userinput, nospace }) {
  const text = useText();

  // TODO:
  // Build banner data using:
  // - total characters
  // - word count
  // - sentence count
  // Respect `nospace` when calculating totals

  const banners = [
    {
      title: text.banner_title_total,
      value: null, // TODO
      class: "total-count",
    },
    {
      title: text.banner_title_word,
      value: null, // TODO
      class: "word-count",
    },
    {
      title: text.banner_title_sentence,
      value: null, // TODO
      class: "sentence-count",
    },
  ];

  // TODO:
  // Decide if you want to format numbers (e.g. leading zeros)
  const formatDigits = (num) => {
    // TODO
    return num;
  };

  const bannerSetList = banners.map((item, index) => (
    <Banner
      key={index}
      title={item.title}
      value={formatDigits(item.value)}
      className={item.class}
    />
  ));

  return <div className="banner-list">{bannerSetList}</div>;
}
