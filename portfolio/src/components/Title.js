// Title.js
import { useEffect, useState } from "react";

const titles = [
  "Full Stack Web Developer",
  "Fotball Lover",
  "Martial Arts Enthusiast",
];

function Title() {
  const [TitleIndex, SetTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      SetTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return <p>I'm {titles[TitleIndex]}</p>;
}

export default Title;
