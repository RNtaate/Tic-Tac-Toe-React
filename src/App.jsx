import TicContextProvider from './context/TicContextProvider';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <TicContextProvider>
      <main>
        <MainPage />
      </main>
    </TicContextProvider>
  );
}

export default App;
