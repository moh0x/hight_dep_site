import ActiveDriversItem from "./ActiveDriver"
import { FaImage } from "react-icons/fa6";
import { MdOnlinePrediction } from "react-icons/md";
import { IoCloudOffline } from "react-icons/io5";
import { MdDriveEta } from "react-icons/md";
import axios from "axios";
import { baseURL, DISBANDRIVER, INACTIVEDRIVER } from "../../../Api/api";
import { RiDeleteBackFill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdAppBlocking } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { useParams } from "react-router";
import { MdEditCalendar } from "react-icons/md";
function ActiveDriversBody(props) {
    async function disBan(e,_id) {

  
              let token = window.localStorage.getItem('token');
          await    axios.post(`${baseURL}${DISBANDRIVER}`,
            {"_id":_id}
                      ,{headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                if (res.status === 200) {
                    window.location.href = `/drivers/active` 
                       console.log(res);
                       
                } else{ 
                    console.log(res);     
                
                }
              }).catch((err)=>{   
                      
              
              }); 
               
            
         
          
          }
   async function click(_id) {
                let token = window.localStorage.getItem('token');
                
            await    axios.put(`${baseURL}${INACTIVEDRIVER}`,{
              _id:_id },
                      {  headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                  if (res.status === 200) {
                          props.setCounter((prev)=>prev+1)
                  } else{      
                  
                  }
                }).catch((err)=>{
                
                             
         
                }); 
  
              }
           
    return (
      
      props.activeDrivers.length == 0?
      <div className="text-white text-center" style={{fontWeight:"bold",fontSize:"20px",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center"}}>There Is Drivers !</div>:      props.activeDrivers.map((activeDriver) =>{

       return <div class="card bg-dark border-white m-4 text-white">
  <div class="card-header border-white justify-content-between">
     <div className="col">FullName : {activeDriver.fullname}</div>
    <div className="col text-end">{activeDriver._id}</div>
  </div>
  <div class="card-body">
    <h5 class="card-title">User Details</h5>
    <h6 class="card-text">Phone Number : {activeDriver.phoneNumber}</h6>
    <h6 class="card-text">City : {activeDriver.city == ""||  activeDriver.city == null|| activeDriver.city == undefined ? <span className="bg-danger p-1 rounded" style={{fontWeight:"blod"}}>Not Yet !</span> : activeDriver.city }</h6>
         <h6 style={{cursor:"pointer","color":"blue"}}><a href={activeDriver.cartGris} style={{textDecoration:"none"}}>Gray Card</a></h6>
                                 <h6 style={{cursor:"pointer","color":"blue"}}><a href={activeDriver.permis} style={{textDecoration:"none"}}>Driving Licence</a></h6>
                                  <h6 style={{cursor:"pointer","color":"blue"}}><a href={activeDriver.drivingLicenece}  style={{textDecoration:"none"}}>Vehicle</a></h6>
                                                   <h6 style={{cursor:"pointer","color":"blue"}}><a href={activeDriver.chaque}  style={{textDecoration:"none"}}>CCP account</a></h6>
                                                                 <h6>Status: <span  style={{fontWeight:"bold",display:"inline-flex",flexDirection:"row",gap:"10px",alignItems:"start"}}>{activeDriver.isBanned == true ?<span className="bg-danger p-1 rounded" style={{fontWeight:"lighter"}}>Banned</span>:activeDriver.status  }{activeDriver.isBanned == true ? <>({activeDriver.banned})</>: activeDriver.status == "online" ? <MdOnlinePrediction size={22} color="green"/>:activeDriver.status == "offline" ?< IoCloudOffline color="red" size={22}/> :<MdDriveEta size={22}/> }</span></h6>
                                                                 <h6 className="align-items-center">Monthly intake : {activeDriver.earnOneMonth == undefined ? 0 : activeDriver.earnOneMonth} Da </h6>
                                                                 <h6 >Daily intake : {activeDriver.earnOneDay == undefined ? 0 : activeDriver.earnOneMonth} Da <MdEditCalendar style={{cursor:"pointer"}} size={22}  onClick={()=>{window.location.pathname=`/payments/add/day/${activeDriver._id}`}}/></h6>
                                                                 <h6 className="text-cented">Actions :</h6>
                                                                 <div className="btn btn-primary" onClick={()=>window.location.pathname=`/courses/user/${activeDriver._id}`}><MdTravelExplore size={24} color="white"/></div> <div className="btn btn-success"  onClick={()=>{window.location.pathname=`/payments/${activeDriver._id}`}}><MdPayment  size={24} color="white"/></div> {activeDriver.isBanned?<div className="m-1 btn btn-warning" onClick={(e)=>disBan(e,activeDriver._id)}><GiReturnArrow   size={24} color="white"  /></div> :<div className="m-1 btn btn-danger" onClick={()=>window.location.pathname=`/bloc/${activeDriver._id}`}><MdAppBlocking  size={24} color="white"  /></div>}
    
  </div>
</div>
      })
            
      
       
       
    )
}
export default ActiveDriversBody