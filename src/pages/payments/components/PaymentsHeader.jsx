import { IoAddCircleSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { useParams } from "react-router";
function PaymentsHeader() {
    const id = useParams()
    return(
        <div className="row justify-content-center">
        <h2 className="text-white  col text-center">Payments</h2>
       
        </div>
        
        
    )
}
export default PaymentsHeader