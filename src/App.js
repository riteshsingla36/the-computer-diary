import './App.css';
import Card from './Card';
import CardQuiz from "./CardQuiz"
import CardYoutube from "./CardYoutube";
import Navbar from './Navbar';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QuizIcon from '@mui/icons-material/Quiz';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className='upper'>
          <span><LibraryBooksIcon /></span>
          <span className='black'>&nbsp;&nbsp;Trending</span> <span className='green'> Books</span>
        </div>
        <div className='inner'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className='upper'>
          <span><QuizIcon /></span>
          <span className='black'>&nbsp;&nbsp;Trending</span> <span className='green'> Quizzes</span>
        </div>
        <div className='inner'>
          <CardQuiz />
          <CardQuiz />
          <CardQuiz />
          <CardQuiz />
        </div>

        <div className='upper'>
          <span><OndemandVideoIcon /></span>
          <span className='black'>&nbsp;&nbsp;Trending</span> <span className='green'> Videos</span>
        </div>

        <div className='inner'>
          <CardYoutube />
          <CardYoutube />
          <CardYoutube />
          <CardYoutube />
        </div>
      </div>
    </>
  );
}

export default App;
