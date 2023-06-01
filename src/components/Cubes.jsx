import { useState } from "react";
import colorGenerator from "../services/colorGenerator";
import Cube from "./Cube";

const cubeCount = 6

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
  
    const cubeComponents = colors.map((color, index) => 
      <Cube key={index} color={color} />
    );
  
    return (
      <>
      {/* <input></input> */}
        <div className="cubes">{cubeComponents}</div>
        <button className="regenBtn" onClick={regenerate}>Regenerate</button>
      </>
    );
};


export default Cubes;
