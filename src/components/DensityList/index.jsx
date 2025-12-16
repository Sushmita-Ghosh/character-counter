import { useState } from "react";
import { useText } from "../../context/TextContext";
import Density from "./Density";

export default function DensityList({ userinput }) {
  const text = useText();

  // TODO:
  // Build density data from `userinput`
  // Expected shape (example):
  // [
  //   [letter, count, ratio],
  //   ...
  // ]

  const data = []; // TODO

  if (data.length === 0) {
    return <p className="density-no-content">{text.no_input_no_density}</p>;
  }

  // TODO:
  // Convert `data` into <Density /> components
  const densityList = data.map((item) => (
    <Density key={item[0]} letter={item[0]} count={item[1]} ratio={item[2]} />
  ));

  // TODO:
  // Decide when to split the list
  const shouldSplit = false;

  const [isOpen, setIsOpen] = useState(false);

  // TODO:
  // Split densityList into two parts
  const firstList = densityList;
  const secondList = [];

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="density-list">
        {firstList}
        {isOpen && secondList}
      </div>

      {shouldSplit && (
        <p className="list-label" onClick={handleClick}>
          {isOpen
            ? text.density_list_close_label
            : text.density_list_open_label}
        </p>
      )}
    </div>
  );
}
