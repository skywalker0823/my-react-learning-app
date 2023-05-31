import getContrast from "../services/getContrast";
import styles from "./style.module.css";

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

export default Cube;