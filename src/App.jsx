import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import CenterPage from './components/CenterPage'

/* commentare CenterPage e decommentare MyProfile o Settings */
// import MyProfile from './components/MyProfile'
// import Settings from './components/Settings'

function App() {


  return (
    <div className='d-flex flex-column vh-100 bg-dark'>

      <MyNavbar />

      <CenterPage />
      
      {/* <MyProfile /> */}
      {/* <Settings /> */}
      

      <MyFooter />

    </div>
  )
}

export default App
