function Home({ preview }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{preview.title}</h1>
      <p style={{ fontSize: "24px" }}>{preview.description}</p>
    </div>
  );
}

export default Home;
