import ServiceItem from "./AdminItem"

function AdminBody(props) {
    return (
     props.admins.length == 0?<div className="text-white text-center" style={{fontWeight:"bold",fontSize:"20px",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center"}}>There Is No Admins !</div>: <table className="table table-striped table-dark mt-4 table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
      
      {props.admins.map((admin)=>{return <ServiceItem admin={admin} counter={props.counter} setCounter={props.setCounter}/>})}
            
      
       
        </tbody>
      </table>)
}
export default AdminBody