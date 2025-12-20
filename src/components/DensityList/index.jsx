// import { useState } from "react";
// import { useText } from "../../context/TextContext";
// import Density from "./Density";

// export default function DensityList({ userinput }) {
//   const text = useText();

//   // TODO:
//   // Build density data from `userinput`
//   // Expected shape (example):
//   // [
//   //   [letter, count, ratio],
//   //   ...
//   // ]

//   const data = []; // TODO

//   if (data.length === 0) {
//     return <p className="density-no-content">{text.no_input_no_density}</p>;
//   }

//   // TODO:
//   // Convert `data` into <Density /> components
//   const densityList = data.map((item) => (
//     <Density key={item[0]} letter={item[0]} count={item[1]} ratio={item[2]} />
//   ));

//   // TODO:
//   // Decide when to split the list
//   const shouldSplit = false;

//   const [isOpen, setIsOpen] = useState(false);

//   // TODO:
//   // Split densityList into two parts
//   const firstList = densityList;
//   const secondList = [];

//   const handleClick = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <div className="density-list">
//         {firstList}
//         {isOpen && secondList}
//       </div>

//       {shouldSplit && (
//         <p className="list-label" onClick={handleClick}>
//           {isOpen
//             ? text.density_list_close_label
//             : text.density_list_open_label}
//         </p>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { useText } from "../../context/TextContext";
import Density from "./Density";
import "./DensityList.css";

export default function DensityList({ userinput }) {
  const text = useText();
  const [isOpen, setIsOpen] = useState(false);

  // --- Calculate letter frequency and ratio ---
  const calculateDensity = (str) => {
    if (!str) return [];
    const lettersOnly = str.replace(/\s+/g, ""); // remove spaces
    const totalLetters = lettersOnly.length;
    const frequencyMap = {};

    for (let char of lettersOnly) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Convert to array: [letter, count, ratio]
    const data = Object.entries(frequencyMap).map(([letter, count]) => ({
      letter,
      count,
      ratio: Math.round((count / totalLetters) * 100),
    }));

    // Sort descending by count
    return data.sort((a, b) => b.count - a.count);
  };

  const data = calculateDensity(userinput);

  if (data.length === 0) {
    return <p className="density-no-content">{text.no_input_no_density}</p>;
  }

  // Split for “show more” if more than 5 letters
  const firstList = data.slice(0, 5);
  const secondList = data.slice(5);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div className="density-list">
        {firstList.map((item) => (
          <Density
            key={item.letter}
            letter={item.letter}
            count={item.count}
            ratio={item.ratio}
          />
        ))}
        {isOpen &&
          secondList.map((item) => (
            <Density
              key={item.letter}
              letter={item.letter}
              count={item.count}
              ratio={item.ratio}
            />
          ))}
      </div>

      {secondList.length > 0 && (
        <p className="list-label" onClick={handleClick}>
          {isOpen
            ? text.density_list_close_label
            : text.density_list_open_label}
        </p>
      )}
    </div>
  );
}
