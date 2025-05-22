import { TiHome } from "react-icons/ti";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaTaxi } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { useState } from "react";
function SideBar(props) {
    console.log(window.localStorage.getItem("admin"));
    
    return(
        <div class="w-25">
    <div class="row">
        <div class="col min-vh-100 py-3">
          
            <button class="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                <i class="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button>
          <div onClick={()=>{props.setSelected(1);window.localStorage.setItem('selected',1);window.location.pathname="/"}} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", borderBottom:"1px solid grey",marginBottom:"10px",cursor:"pointer",padding:"10px"}}><TiHome color={window.location.pathname == "/" || window.location.pathname == "/home"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline col fw-bold" style={{color:window.location.pathname == "/" || window.location.pathname == "/home"?'#3bc5f3' :"white"}}>Home</span></div>
          <div onClick={()=>{props.setSelected(2);window.localStorage.setItem('selected',2);window.location.pathname="/services"}} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", borderBottom:"1px solid grey",marginBottom:"10px",cursor:"pointer",padding:"10px"}}><MdOutlineDesignServices  color={ window.location.pathname == "/services"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline col fw-bold" style={{color: window.location.pathname == "/services"?'#3bc5f3' :"white"}}>Services</span></div>
       {window.localStorage.getItem("admin") != undefined ?   <div onClick={()=>{props.setSelected(3);window.localStorage.setItem('selected',3);window.location.pathname="/admins"}} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", borderBottom:"1px solid grey", marginBottom:"10px",cursor:"pointer",padding:"10px"}}><RiAdminFill color={ window.location.pathname == "/admins"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline  col fw-bold" style={{color: window.location.pathname == "/admins"?'#3bc5f3' :"white"}}>Admins</span></div>:<></>}
          <div onClick={()=>{props.setSelected(4);window.localStorage.setItem('selected',4);window.location.pathname="/drivers/inActive"}} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", borderBottom:"1px solid grey", marginBottom:"10px",cursor:"pointer",padding:"10px"}}><HiMiniWrenchScrewdriver  color={window.location.pathname == "/drivers/inActive"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline  col fw-bold" style={{color:window.location.pathname == "/drivers/inActive"?'#3bc5f3' :"white"}}>New Drivers</span></div>
          <div onClick={()=>{props.setSelected(5);window.localStorage.setItem('selected',5);window.location.pathname="/drivers/active"}} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", borderBottom:"1px solid grey", marginBottom:"10px",cursor:"pointer",padding:"10px"}}><FaTaxi color={window.location.pathname == "/drivers/active"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline  col fw-bold" style={{color:window.location.pathname == "/drivers/active"?'#3bc5f3' :"white"}}>Drivers</span></div>
          <div onClick={()=>{props.setSelected(6);window.localStorage.setItem('selected',6);window.location.pathname="/map"}}  style={{display:"flex", justifyContent:"flex-start", alignItems:"center", borderBottom:"1px solid grey",marginBottom:"10px",cursor:"pointer",padding:"10px"}}><FaMapMarkedAlt color={window.location.pathname == "/map"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline  col fw-bold" style={{color:window.location.pathname == "/map"?'#3bc5f3' :"white"}}>Map</span></div>
          <div onClick={()=>{props.setSelected(7);window.localStorage.setItem('selected',7);window.location.pathname="/courses"}} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", borderBottom:"1px solid grey", marginBottom:"10px",cursor:"pointer",padding:"10px"}}><MdOutlineTravelExplore color={window.location.pathname == "/courses"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline  col fw-bold" style={{color:window.location.pathname == "/courses"?'#3bc5f3' :"white"}}>Trips</span></div>
          <div onClick={()=>{props.setSelected(8);window.localStorage.setItem('selected',8);window.location.pathname="/payments"}} style={{display:"flex", justifyContent:"flex-start", alignItems:"center", marginBottom:"10px",cursor:"pointer",padding:"10px"}}><MdPayment color={window.location.pathname == "/payments"?'#3bc5f3' :"white"} className='p-0' size={24}/>  <span class="ms-1 d-none d-sm-inline  col fw-bold" style={{color:window.location.pathname == "/payments"?'#3bc5f3' :"white"}}>Payment</span></div>
        </div>
    </div>
</div>
    )
}
export default SideBar