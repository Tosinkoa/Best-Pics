export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <h1>Best Pics </h1>
      <p>
        <small>
          BEST PICS @<span>{year}</span>
        </small>
      </p>
    </footer>
  );
}
