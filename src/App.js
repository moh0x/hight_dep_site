import './App.css';
import 'react-bootstrap'
import CustomNavBar from './components/layout/NavBar';
import { Route, Routes } from 'react-router';
import Courses from './pages/courses/Courses';
import Services from './pages/services/Services';
import AddServices from './pages/add service/AddService';
import Login from './pages/login/Login';
import './App.css'
import Admins from './pages/admins/Admins';
import AddAdmin from './pages/add admin/AddAdmin';
import EditAdmin from './pages/edit admin/EditAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SideBar from './components/layout/SideBar';
import Statics from './pages/statics/Statics';
import InActiveDrivers from './pages/inActive users/InActiveDerivers';
import ActiveDrivers from './pages/active users/ActiveDrivers';
import UserCourses from './pages/user courses/UserCourses';
import AddPayment from './pages/add payment/AddPayment';
import UserPayments from './pages/user payments/UserPayments';
import Payments from './pages/payments/Payments';
import DriverMap from './pages/map/Map';
import Bloc from './pages/block user/BlocUser';
import { useState } from 'react';
import AddPaymentDay from './pages/payment dayli/AddPaymentDaily';
import AddCourse from './pages/add course/AddCourse';
import {isMobile, isTablet} from 'react-device-detect';
function App() {
 const a = window.localStorage.setItem('selected',1);
  const[selected,setSelected]=useState(a)
  if (isMobile || isTablet) {
    return <>Sorry</>
  }else{
    return (
    <>
    <CustomNavBar />
    <main style={{display:'flex',flexDirection:"row"}}>
 {window.localStorage.getItem("token")!= null  || window.localStorage.getItem("token")!= undefined ?  <SideBar selected={selected} setSelected={setSelected}/> : <></>}
    


    <Routes>
    <Route path='/' element={window.localStorage.getItem("token")!= null  || window.localStorage.getItem("token")!= undefined ? <Statics /> : <Login />} />
    <Route path='/map' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <DriverMap /> : <Login />} />
      <Route path='/courses' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <Courses /> : <Login />} />
       <Route path='/courses/add/:id' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <AddCourse /> : <Login />} />
      <Route path='/courses/user/:id' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <UserCourses /> : <Login />} />
      <Route path='/home' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined  ? <Statics /> : <Login />} />
      <Route path='/payments' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined  ? <Payments /> : <Login />} />
      <Route path='/payments/add/:id' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <AddPayment /> : <Login />} />
      <Route path='/payments/add/day/:id' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <AddPaymentDay /> : <Login />} />
      <Route path='/payments/:id' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <UserPayments /> : <Login />} />
      <Route path='/services' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <Services /> : <Login />} >
      </Route>
      <Route path='/services/add' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <AddServices /> : <Login />} />
      <Route path='/admins' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <Admins /> : <Login />} />
      <Route path='/admins/add' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <AddAdmin /> : <Login />} />
      <Route path='/admins/edit/:id' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <EditAdmin /> : <Login />} />
      <Route path='/drivers/inActive' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <InActiveDrivers /> : <Login />} />
      <Route path='/drivers/active' element={window.localStorage.getItem("token")!= null || window.localStorage.getItem("token")!= undefined ? <ActiveDrivers /> : <Login />} />
          <Route path='/bloc/:id' element={window.localStorage.getItem("token")!= null  || window.localStorage.getItem("token")!= undefined ? <Bloc /> : <Login />} />
    </Routes>
    </main></>
  );
  }
}

export default App;
