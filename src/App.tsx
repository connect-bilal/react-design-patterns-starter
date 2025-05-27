import { Routes, Route } from 'react-router-dom';

import { Container } from './components';
import HomePage from './pages/HomePage';

export default function App() {
  const rootStyle = 'min-h-screen bg-body overflow-x-hidden font-normal';

  return (
    <div className={rootStyle}>
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}
