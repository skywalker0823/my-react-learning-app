import { useState } from "react";
import styles from "./style.module.css";

const cubeCount = 6

const colorGenerator = () => {
  const letters = '0123456789ABCDEF' ;
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getContrast = (hexColor) => {
  hexColor = hexColor.replace("#", "");

  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  const contrastColor = brightness > 128 ? "#000000" : "#FFFFFF";

  return contrastColor;
}



const Cube = () => {

  const [color, setColor] = useState(colorGenerator());

  return <div className={styles.cube} style={{ backgroundColor:color }} alt="init cube">
    <p style={{ color:getContrast(color) }} className={styles.cubeFont}>{color}</p>
  </div>
};


const Cubes = () => {
  const cubeComponents = Array(cubeCount).fill(null).map((_, index) => (
    <Cube key={index} />
  ));

  
  return <>{cubeComponents}</>;
}

export default Cubes;
