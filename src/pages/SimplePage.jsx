export default function SimplePage({ title, text }) {
  return (
    <section className="page-intro">
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
