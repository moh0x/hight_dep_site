import { MdDelete } from "react-icons/md";
import { baseURL, DELETESERVICE } from "../../../Api/api";
import axios from "axios";
function CourseItem(props) {

            
            return( <tr>
       <td scope="col">{props.course._id}</td>
            <td scope="col">{props.course.matricule}</td>
            <td scope="col">{props.course.dateStartJourney.toString().substring(0,10)}</td>
            <td scope="col">{props.course.chauferName}</td>
            <td scope="col">{props.course.phoneNumber}</td>
            <td scope="col">{props.course.kilomitrage} KM</td>
          {props.course.isFinished ? <td scope="col">{props.course.kilomitragePaid} KM</td> : <td scope="col"><div className="bg-danger p-1 rounded">Not Yet!</div></td>}
          {props.course.isFinished ?   <td scope="col">{props.course.priceParKilomitre}</td>: <td scope="col"><div className="bg-danger p-1 rounded">Not Yet!</div></td>}   
            <td scope="col">{props.course.Depart}</td>
            <td scope="col">{props.course.Destination}</td>
            {props.course.assurance != null || props.course.assurance != undefined?     <td scope="col">{props.course.assurance}</td>: <td scope="col">No Assurance!</td>}  
            {props.course.isFinished ?   <td scope="col">{props.course.dateEndJourney}</td>: <td scope="col"><div className="bg-danger p-1 rounded">Not Yet!</div></td>}   
            {props.course.isFinished == true ?       <td scope="col"><img width={150} height={150} style={{borderRadius:"15px"}} src={`${props.course.cartGris}`}></img></td>: <td scope="col">Not Yet!</td>}       
            { props.course.isFinished == true ? props.course.isPay == true ?   <td scope="col"><div className="bg-success p-1 rounded">Paid</div></td>: <td scope="col"><div className="bg-danger p-1 rounded">Pending!</div></td> : <td scope="col"><div className="bg-danger p-1 rounded">Not Yet!</div></td>}             
            <td scope="col"> {props.course.isAccepet == true ? props.course.isFinished == false?<div className="bg-primary p-1 rounded">Driving!</div>:   <td scope="col"><div className="bg-success p-1 rounded">Finish</div></td>: <td scope="col"><div className="bg-warning p-1 rounded">Sent to driver!</div></td>}  </td>
              </tr>
              )}

export default CourseItem