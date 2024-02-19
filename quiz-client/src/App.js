import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js';
import Quiz from './components/Quiz.js';
import Result from './components/Result.js';
import Layout from './components/Layout.js';
import Authenticate from './components/Authenticate.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route  element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/result" element={<Result />}/>
          </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
