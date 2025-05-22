import ServiceItem from "./ServicesItem"

function ServicesBody(props) {
    return (
     props.services.length == 0?<div className="text-white text-center" style={{fontWeight:"bold",fontSize:"20px",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center"}}>There Is No Services !</div>: <table className="table table-striped table-dark mt-4 table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Service</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
      
      {props.services.map((service)=>{return <ServiceItem service={service} counter={props.counter} setCounter={props.setCounter}/>})}
            
      
       
        </tbody>
      </table>)
}
export default ServicesBody