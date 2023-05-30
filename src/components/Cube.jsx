import { useState } from "react";
import styles from "./style.module.css";


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

  // 将十六进制颜色转换为RGB值
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  // 计算亮度
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // 根据亮度选择合适的对比色
  const contrastColor = brightness > 128 ? "#000000" : "#FFFFFF";

  return contrastColor;
}



const Cube = () => {
  // useEffect(()=>{
  //   console.log(this.alt)
  // },[])
  const [color, setColor] = useState(colorGenerator());


  return <div className={styles.cube} style={{ backgroundColor:color }} alt="init cube">
    <p style={{ color:getContrast(color) }} className={styles.cubeFont}>{color}</p>
  </div>
};

export default Cube;
