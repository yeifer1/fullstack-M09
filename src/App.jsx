import { MoviesProvider } from './Context/MoviesContext'
import { AuthProvider } from './Context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
// import Navbar from './components/Navbar/Navbar'

function App () {
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
  )
}

export default App
