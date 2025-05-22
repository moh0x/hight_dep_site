import { MdDelete } from "react-icons/md";
import { ACTIVEDRIVER, baseURL, DELETESERVICE } from "../../../Api/api";
import axios from "axios";
import { FaCheckDouble } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
function InActiveDriverItem(props) {
   async function click() {
                let token = window.localStorage.getItem('token');
                
            await    axios.put(`${baseURL}${ACTIVEDRIVER}`,{
              _id:props.inActiveDriver._id },
                      {  headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                  if (res.status === 200) {
                          props.setCounter((prev)=>prev+1)
                  } else{      
                  
                  }
                }).catch((err)=>{
                  console.log(err); 
                  console.log(props.inActiveDriver._id);
                             
         
                }); 
  
              }
           
            
            return( <tr>
        <td>{props.inActiveDriver._id}</td>
        <td>{props.inActiveDriver.createdAt.toString().substring(0,10)}</td>
              <td>{props.inActiveDriver.fullname}</td>
              <td>{props.inActiveDriver.phoneNumber}</td>
              <td>{props.inActiveDriver.city == ""||  props.inActiveDriver.city == null||props.inActiveDriver.city == undefined ? <span className="bg-danger p-1 rounded" style={{fontWeight:"lighter"}}>Not Yet !</span> : props.inActiveDriver.city }</td>
              <td>
                                <div className="row align-items-center justify-content-start"><a href={props.inActiveDriver.cartGris} className="col-8" style={{textDecoration:"none"}}>Gray Card</a><FaImage className="col" color="blue"/></div>
                <div className="row align-items-center justify-content-start"><a href={props.inActiveDriver.permis} className="col-8" style={{textDecoration:"none"}}>Driving Licence</a><FaImage className="col" color="blue"/></div>
                 <div className="row align-items-center justify-content-start"><a href={props.inActiveDriver.drivingLicenece} className="col-8" style={{textDecoration:"none"}}>Vehicle</a><FaImage className="col" color="blue"/></div>
                                  <div className="row align-items-center justify-content-start"><a href={props.inActiveDriver.chaque} className="col-8" style={{textDecoration:"none"}}>CCP account</a><FaImage className="col" color="blue"/></div>
              </td>
              <td><span className="bg-danger p-1 rounded" style={{fontWeight:"lighter"}}>In Active</span></td>
              <td><div className="btn btn-success">

<FaCheckDouble size={24} color="white" data-bs-toggle="modal" data-bs-target="#exampleModal"/>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-dark text-white">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Are You Sure?</h5>
      </div>
      <div className="modal-body">
        Are You Sure You Want To Approve User ?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-success"  data-bs-dismiss="modal" onClick={()=>click()}>Approve</button>
      </div>
    </div>
  </div>
</div></div></td></tr>
              )}

export default InActiveDriverItem