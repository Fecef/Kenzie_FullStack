import "./style.css"

export const Card = ({ name, age, country }) => {
  return (
    <menu>
      <li >
        <h2>Dev: {name}</h2>
        <p>Age: {age}</p>
        <p>País: {country}</p>
      </li>
    </menu>
  );
};
