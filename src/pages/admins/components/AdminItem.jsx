import { MdDelete } from "react-icons/md";
import { baseURL, DELETEADMIN } from "../../../Api/api";
import axios from "axios";
import { MdEdit } from "react-icons/md";
function AdminItem(props) {
   async function click() {
                let token = window.localStorage.getItem('token');
                
            await    axios.delete(`${baseURL}${DELETEADMIN}`,{
              data:{_id:props.admin._id},
                        headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                  if (res.status === 200) {
                          props.setCounter((prev)=>prev+1)
                  } else{      
                  
                  }
                }).catch((err)=>{
                  console.log(err);            
         
                }); 
  
              }
           
            
            return( <tr>
        <td>{props.admin._id}</td>
              <td>{props.admin.email}</td>
              <td>{props.admin.createdAt.toString().substring(0,10)}</td>
              <td><div className="btn btn-danger">

<MdDelete size={24} color="white" data-bs-toggle="modal" data-bs-target="#exampleModal"/>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
  <div className="modal-dialog">
    <div className="modal-content bg-dark text-white">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Are You Sure?</h5>
      </div>
      <div className="modal-body">
        Are You Sure You Want To Delete Item ?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>click()}>Delete</button>
      </div>
    </div>
  </div>
</div></div>   <div className="btn btn-primary" onClick={()=>window.location.pathname=`/admins/edit/${props.admin._id}`}><MdEdit size={24} color="white"/></div></td></tr>
              )}

export default AdminItem