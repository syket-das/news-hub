import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsPages from './pages/NewsPages';
import NavBar from './components/NavBar';
import CreateNews from './pages/CreateNews';
import FakeNews from './pages/FakeNews';
import RealNews from './pages/RealNews';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="d-flex justify-content-center">
                <NewsPages />
              </div>
            }
          />

          <Route path="/create-news" element={<CreateNews />} />

          <Route
            path="/fake-news"
            element={
              <div className="d-flex justify-content-center">
                <FakeNews />
              </div>
            }
          />

          <Route
            path="/real-news"
            element={
              <div className="d-flex justify-content-center">
                <RealNews />
              </div>
            }
          />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
