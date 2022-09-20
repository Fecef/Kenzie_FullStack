import "./style.css";

export function CenteredCard({ children }) {
  return (
    <div className="card-wrapper">
      <span>{children}</span>
    </div>
  );
}
