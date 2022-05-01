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
import PrivateRoute from './Components/PrivateRoute';
import AdminPrivateRoute from './Components/Admin/AdminPrivateRoute';
import AllQuizzes from './Components/Admin/AllQuizzes';
import AllYoutubes from './Components/Admin/AllYoutubes';



function App() {

  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <div className="App">
          <Routes>
            <Route element={<PrivateRoute />} >
              <Route path='/' element={<Home />} />
              <Route path='/quiz/:id' element={<QuizPage />} />
              <Route element={<AdminPrivateRoute />} >
                <Route path='/admin/home' element={<AdminHome />} />
                <Route path="/admin/createquiz" element={<CreateQuiz />} />
                <Route path="/admin/createquestion/:id" element={<CreateQuestion />} />
                <Route path="/admin/createyoutube" element={<CreateYoutube />} />
                <Route path="/admin/allquizzes" element={<AllQuizzes />} />
                <Route path="/admin/allyoutubes" element={<AllYoutubes />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
