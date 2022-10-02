import "./style.css";

const Card = (card) => {
  return <img src={card.image} alt={card.code} className="card" />;
};

export default Card;
