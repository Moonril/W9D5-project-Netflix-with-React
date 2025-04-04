import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import CenterPage from './components/CenterPage'

function App() {


  return (
    <div className='d-flex flex-column vh-100 bg-dark'>

      <MyNavbar />

      <CenterPage />
      

      <MyFooter />

    </div>
  )
}

export default App
