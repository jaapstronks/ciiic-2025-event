import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sessions from './pages/Sessions';
import SessionPage from './pages/SessionPage';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route
            path="/sessions/:id"
            element={<SessionPage />}
          />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
