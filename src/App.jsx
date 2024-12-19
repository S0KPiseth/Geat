import Header from "./Header.jsx";
import Card from "./Card/Card.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <h1 className="navElement">Charactor</h1>
      <div className="cardContainer">
        <Card name="ace" />
        <Card name="neon" />
        <Card name="buffa" />
        <Card name="tycoon" />
      </div>
    </>
  );
}

export default App;
