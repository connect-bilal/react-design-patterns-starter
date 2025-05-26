import { Routes, Route } from 'react-router-dom';

import { Container } from './components';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="main">
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}
