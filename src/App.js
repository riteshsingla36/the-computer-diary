import './App.css';
import Card from './Card';
import CardQuiz from "./CardQuiz"
import CardYoutube from "./CardYoutube";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Card />
        <Card />
        <Card />
        <Card />
        <CardQuiz />
        <CardQuiz />
        <CardQuiz />
        <CardQuiz />
        <CardYoutube />
        <CardYoutube />
        <CardYoutube />
        <CardYoutube />
      </div>
    </>
  );
}

export default App;
