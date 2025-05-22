import { MdDelete } from "react-icons/md";
import { ACTIVEDRIVER, baseURL, DISBANDRIVER, INACTIVEDRIVER, } from "../../../Api/api";
import axios from "axios";
import { FaCheckDouble } from "react-icons/fa";
import { RiDeleteBackFill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdAppBlocking } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { useParams } from "react-router";
import { FaImage } from "react-icons/fa6";
import { MdOnlinePrediction } from "react-icons/md";
import { IoCloudOffline } from "react-icons/io5";
import { MdDriveEta } from "react-icons/md";
function ActiveDriversItem(props) {
  const params = useParams()
   async function disBan(e) {

  
              let token = window.localStorage.getItem('token');
          await    axios.post(`${baseURL}${DISBANDRIVER}`,
            {"_id":props.activeDriver._id}
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
   async function click() {
                let token = window.localStorage.getItem('token');
                
            await    axios.put(`${baseURL}${INACTIVEDRIVER}`,{
              _id:props.activeDriver._id },
                      {  headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                  if (res.status === 200) {
                          props.setCounter((prev)=>prev+1)
                  } else{      
                  
                  }
                }).catch((err)=>{
                  console.log(err); 
                  console.log(props.activeDriver._id);
                             
         
                }); 
  
              }
           
            
            return( <tr>
        <td>{props.activeDriver._id}</td>
        <td>{props.activeDriver.createdAt.toString().substring(0,10)}</td>
              <td>{props.activeDriver.fullname}</td>
              <td>{props.activeDriver.phoneNumber}</td>
              <td scope="col">{props.activeDriver.city == ""||  props.activeDriver.city == null||props.activeDriver.city == undefined ? <span className="bg-danger p-1 rounded" style={{fontWeight:"lighter"}}>Not Yet !</span> : props.activeDriver.city }</td>
                           <td>
                                             <div className="row align-items-center justify-content-start"><a href={props.activeDriver.cartGris} className="col-8" style={{textDecoration:"none"}}>Gray Card</a><FaImage className="col" color="blue"/></div>
                             <div className="row align-items-center justify-content-start"><a href={props.activeDriver.permis} className="col-8" style={{textDecoration:"none"}}>Driving Licence</a><FaImage className="col" color="blue"/></div>
                              <div className="row align-items-center justify-content-start"><a href={props.activeDriver.drivingLicenece} className="col-8" style={{textDecoration:"none"}}>Vehicle</a><FaImage className="col" color="blue"/></div>
                                               <div className="row align-items-center justify-content-start"><a href={props.activeDriver.chaque} className="col-8" style={{textDecoration:"none"}}>CCP account</a><FaImage className="col" color="blue"/></div>
                           </td>
              <td><span  style={{fontWeight:"bold",display:"flex",flexDirection:"column",gap:"10px",alignItems:"center"}}>{props.activeDriver.isBanned == true ?<span className="bg-danger p-1 rounded" style={{fontWeight:"lighter"}}>Banned</span>:props.activeDriver.status  }{props.activeDriver.isBanned == true ? <></>: props.activeDriver.status == "online" ? <MdOnlinePrediction size={22}/>:props.activeDriver.status == "offline" ?< IoCloudOffline size={22}/> :<MdDriveEta size={22}/> }</span></td>
              <td><div className="btn btn-danger">

<RiDeleteBackFill size={24} color="white" data-bs-toggle="modal" data-bs-target="#exampleModal"/>


</div> <div className="btn btn-primary" onClick={()=>window.location.pathname=`/courses/${props.activeDriver._id}`}><MdTravelExplore size={24} color="white"/></div> <div className="btn btn-success" ><MdPayment size={24} color="white"/></div> {props.activeDriver.isBanned?<div className="m-1 btn btn-warning" onClick={(e)=>disBan(e)}><GiReturnArrow   size={24} color="white"  /></div> :<div className="m-1 btn btn-danger" onClick={()=>window.location.pathname=`/bloc/${props.activeDriver._id}`}><MdAppBlocking  size={24} color="white"  /></div>} </td></tr>
              )}

export default ActiveDriversItem