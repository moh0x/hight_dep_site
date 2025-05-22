import { MdDelete } from "react-icons/md";
import { baseURL, DELETESERVICE } from "../../../Api/api";
import axios from "axios";
function PaymentItem(props) {

            
            return( <tr>
       <td scope="col">{props.payment._id}</td>
            <td scope="col">{props.payment.chauferName}</td>
            <td scope="col">{props.payment.createdAt.toString().substring(0,10)}</td>
            <td scope="col">{props.payment.numberOfCourses} Course</td>
            <td scope="col">{props.payment.chauferPay} DA</td>         
            <td scope="col"> {props.payment.status ==  "start" ?<div className="bg-warning p-1 rounded">Pending!</div>:   <td scope="col"><div className="bg-success p-1 rounded ">Paid!</div></td>}</td>
              </tr>
              )}

export default PaymentItem