import { useState } from "react";
import styles from "./style.module.css";
import colorGenerator from "../services/colorGenerator";
const cubeCount = 6

//Input hex color code, output contrast color
const getContrast = (hexColor) => {
  hexColor = hexColor.replace("#", "");

  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  const contrastColor = brightness > 128 ? "#000000" : "#FFFFFF";

  return contrastColor;
}


const Cube = ({ color }) => {
  const contrastColor = getContrast(color);

  return (
    <div
      className={styles.cube}
      style={{ backgroundColor: color }}
      alt="init cube"
    >
      <p style={{ color: contrastColor }} className={styles.cubeFont}>
        {color}
      </p>
    </div>
  );
};


const Cubes = () => {
  const [colors, setColors] = useState(
    Array(cubeCount)
      .fill(null)
      .map(() => colorGenerator())
  );

  const regenerate = () => {
    const newColors = Array(cubeCount)
      .fill(null)
      .map(() => colorGenerator());
    setColors(newColors);
  };

  const cubeComponents = colors.map((color, index) => (
    <Cube key={index} color={color} />
  ));

  return (
    <>
    {/* <input></input> */}
      <div className="cubes">{cubeComponents}</div>
      <button className="regenBtn" onClick={regenerate}>Regenerate</button>
    </>
  );
};


export default Cubes;
