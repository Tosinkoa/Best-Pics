export default function Card({ children }) {
  return <div className={`card ${children}`}>{children}</div>;
}
