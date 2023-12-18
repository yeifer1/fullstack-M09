import { MoviesProvider } from './components/Context/MoviesContext'
import { AuthProvider } from './components/Context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './components/routes/RoutesIndex'
import Navbar from './components/Navbar/Navbar'

function App () {
  return (
    <>
      <MoviesProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <RoutesIndex />
          </BrowserRouter>
        </AuthProvider>
      </MoviesProvider>
    </>
  )
}

export default App
