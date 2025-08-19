import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MovieCenterPage from './components/MovieCenterPage'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'


/* commentare CenterPage e decommentare MyProfile o Settings */
import MyProfile from './components/MyProfile'
import Settings from './components/Settings'
import SearchPage from './components/SearchPage'
import HomeCenterPage from './components/HomeCenterPage'

function App() {


  return (
    <BrowserRouter>
      <div className='d-flex flex-column vh-100 bg-dark'>

        <MyNavbar />

        <Routes>
          <Route path='/' element={<HomeCenterPage />} />
          <Route path='/movies' element={<MovieCenterPage />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/search' element={<SearchPage />} />
          
          <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        

        <MyFooter />

      </div>
    </BrowserRouter>
  )
}

export default App
