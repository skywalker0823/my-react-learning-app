import styles from "./style.module.css";
import NiceButton from "./NiceButton";

const TopBar = () => {
  return (
    <div className={styles.top_bar}>
      <h1>Top</h1>
      <NiceButton />
    </div>
  );
};
  
export default TopBar;
  