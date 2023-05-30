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

  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState(colorGenerator());

  return <div className={styles.cube} style={{ backgroundColor:color }} alt="init cube">
    <p style={{ color:getContrast(color) }} className={styles.cubeFont}>{color}</p>
  </div>
};



const Cubes = () => {
  const regenerate = () => {
    const cubes = document.querySelectorAll(`.${styles.cube}`);
    cubes.forEach((cube) => {
      cube.style.backgroundColor = colorGenerator();
      cube.style.color = getContrast(cube.style.backgroundColor);
    });
  };
  const cubeComponents = Array(cubeCount).fill(null).map((_, index) => (
    <Cube key={index} />
  ));

  
  return (
    <>
      <div className={styles.cube_holder}>
        {cubeComponents}
      </div>
      <button className={styles.button} onClick={regenerate}>
        Regenerate
      </button>
    </>
  );
}

export default Cubes;
