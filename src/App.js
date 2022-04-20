import './App.css';

import Navbar from './Components/Navbar';

import { Container } from '@mui/material';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import QuizPage from './Components/QuizPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AdminHome from './Components/Admin/AdminHome';
import CreateQuiz from './Components/Admin/CreateQuiz';
import CreateQuestion from './Components/Admin/CreateQuestion';
import CreateYoutube from './Components/Admin/CreateYoutube';



function App() {

  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz/:id' element={<QuizPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/admin/home' element={<AdminHome />} />
            <Route path="/admin/createquiz" element={<CreateQuiz />} />
            <Route path="/admin/createquestion/:id" element={<CreateQuestion />} />
            <Route path="/admin/createyoutube" element={<CreateYoutube />} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
