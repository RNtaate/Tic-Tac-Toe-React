import { Routes, Route } from 'react-router-dom';

import PrivateRoutes from './components/PrivateRoutes';
import TicContextProvider from './context/TicContextProvider';
import MainPage from './pages/MainPage';
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <TicContextProvider>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/main" element={<MainPage />} />
          </Route>
        </Routes>
        <Welcome />
      </main>
    </TicContextProvider>
  );
}

export default App;
