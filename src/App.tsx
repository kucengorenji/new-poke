import MobileLayout from './components/layout/MobileLayout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MobileLayout>
  );
}

export default App;
