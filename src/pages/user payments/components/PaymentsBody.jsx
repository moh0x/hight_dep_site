import PaymentItem from "./PaymentItem"
import CourseItem from "./PaymentItem"

function PaymentsBody(props) {
    return (
  props.payments.length == 0?<div className="text-white text-center" style={{fontWeight:"bold",fontSize:"20px",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center"}}>There Is No Payments For This User !</div>: 
     <div className="table-responsive custom-scrollbar" style={{overflowX: "auto", overFlowY: "hidden",}}>
      <table className="table table-striped table-dark mt-4 table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Driver's name</th>
            <th scope="col">Date</th>
            <th scope="col">Number Of Courses</th>
            <th scope="col">Chaufer Pay</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
      
      {props.payments.map((payment)=>{return <PaymentItem payment={payment} counter={props.counter} setCounter={props.setCounter}/>})}
            
      
       
        </tbody>
      </table>
    </div>)
}
export default PaymentsBody