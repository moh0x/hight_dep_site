import InActiveDriverItem from "./InActiveDriver"
import ServiceItem from "./InActiveDriver"

function InActiveDriversBody(props) {
    return (
    props.inActiveDrivers.length == 0?<div className="text-white text-center" style={{fontWeight:"bold",fontSize:"20px",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center"}}>There Is No New Drivers !</div>:  <table className="table table-striped table-dark mt-4 table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Date</th>
            <th scope="col">Fullname</th>
            <th scope="col">Phone Number</th>
            <th scope="col">City</th>
            <th scope="col">Dossier</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
      
      {props.inActiveDrivers.map((inActiveDriver)=>{return <InActiveDriverItem inActiveDriver={inActiveDriver} counter={props.counter} setCounter={props.setCounter}/>})}
            
      
       
        </tbody>
      </table>)
}
export default InActiveDriversBody