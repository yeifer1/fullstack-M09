
import { MoviesProvider } from "./components/Context/MoviesContext";
import { AuthProvider } from './components/Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './components/routes/RoutesIndex';

function App() {
  return (
    <>
      <MoviesProvider>
        <AuthProvider>
          <BrowserRouter>
            <RoutesIndex />
          </BrowserRouter>
        </AuthProvider>
      </MoviesProvider>
    </>
  );
}

export default App;
