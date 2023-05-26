import { useState } from "react";
import styles from "./style.module.css";

const card_infos = [
  { title: "Card 1", id: 1, description: "Description 1" },
  { title: "Card 2", id: 2, description: "Description 2" },
  { title: "Card 3", id: 3, description: "Description 3" },
  { title: "Card 4", id: 4, description: "Description 4" },
];

const Card = () => {
  const [content, setContent] = useState(() => {
    const initialContent = {};
    card_infos.forEach((card) => {
      initialContent[card.id] = card.description;
    });
    return initialContent;
  });

  const handleButtonClick = (card_id) => {
    return () => {
      setContent((prevState) => ({
        ...prevState,
        [card_id]: `New Card Content ${card_id}`,
      }));
    };
  };

  const cards = card_infos.map((card_info) => (
    <div className={styles.card} key={card_info.id}>
      <h3>{card_info.title}</h3>
      <p>{content[card_info.id]}</p>
      <button onClick={handleButtonClick(card_info.id)}>Click Me</button>
    </div>
  ));

  return <>{cards}</>;
};

export default Card;
