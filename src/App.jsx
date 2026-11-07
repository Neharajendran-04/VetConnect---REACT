import { Route, Routes } from 'react-router-dom'
import './App.css'
import SelectPortal from './Pages/public/SelectPortal'
import Login from './Pages/public/Login'
import Register from './Pages/public/Register'
import Dashboard from './Pages/user/Dashboard'
import MyPets from './Pages/user/MyPets'
import PetDetails from './Pages/user/PetDetails'
import BookAppointments from './Pages/user/BookAppointments'
import MyAppointments from './Pages/user/MyAppointments'
import MedicalRecords from './Pages/user/MedicalRecords'
import MyProfile from './Pages/user/MyProfile'
import AdminLogin from './Pages/admin/AdminLogin'
import AdminDashboard from './Pages/admin/AdminDashboard'
import ManageAppointments from './Pages/admin/ManageAppointments'
import ManageDoctors from './Pages/admin/ManageDoctors'
import Home from './Pages/public/Home'
import ManageUsers from './Pages/admin/ManageUsers'
import Header from './Components/Header'
import Footer from './Components/Footer'



function App() {

  return (
    <>
    <Header />
      <Routes>
        {/* Public paths */}
        <Route path='/' element={<Home />}/>
        <Route path='/select-portal' element={<SelectPortal />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        {/* User paths */}
        <Route path='/user/dashboard' element={<Dashboard />}/>
        <Route path='/user/pets' element={<MyPets />}/>
        <Route path='/user/pets/:petId' element={<PetDetails />}/>
        <Route path='/user/appointments/book' element={<BookAppointments />}/>
        <Route path='/user/appointments' element={<MyAppointments />}/>
        <Route path='/user/medical-records' element={<MedicalRecords />}/>
        <Route path='/user/profile' element={<MyProfile />}/>

        {/* Admin paths */}
        <Route path='/admin/login' element={<AdminLogin />}/>
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/appointments' element={<ManageAppointments />}/>
        <Route path='/admin/doctors' element={<ManageDoctors />}/>
         <Route path='/admin/users' element={<ManageUsers />}/>


      </Routes>
      <Footer />
    </>
  )
}

export default App
