import { Routes, Route } from 'react-router-dom';

import TicContextProvider from './context/TicContextProvider';
import MainPage from './pages/MainPage';
import Welcome from './pages/Welcome';
import './App.css';

function App() {
  return (
    <TicContextProvider>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
        {/* <MainPage /> */}
        <Welcome />
      </main>
    </TicContextProvider>
  );
}

export default App;
