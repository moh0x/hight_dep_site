import CourseItem from "./CoursesItem"

function CoursesBody(props) {
    return (
   props.courses.length == 0?<div className="text-white text-center" style={{fontWeight:"bold",fontSize:"20px",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center"}}>There Is No Tripes For This User !</div>: 
  //  <div className="table-responsive custom-scrollbar" style={{overflowX: "auto", overFlowY: "hidden",}}>
  //     <table className="table table-striped table-dark mt-4 table-bordered">
  //       <thead>
  //         <tr>
  //           <th scope="col">id</th>
  //           <th scope="col">Registration number</th>
  //           <th scope="col">Date(Start)</th>
  //           <th scope="col">Driver's name</th>
  //           <th scope="col">Phone Number</th>
  //           <th scope="col">Free Kilomitrage</th>
  //           <th scope="col">kilometers driven</th>
  //           <th scope="col">Price per kilometer</th>
  //           <th scope="col">Depart</th>
  //           <th scope="col">Destination</th>
  //           <th scope="col">Assurance</th>
  //           <th scope="col">Date(End)</th>
  //           <th scope="col">Cart Gris</th>
  //           <th scope="col">Payment</th>
  //           <th scope="col">Status</th>
  //         </tr>
  //       </thead>
  //       <tbody>
      
      props.courses.map((course)=>{

        
        return <div class="card bg-dark border-white m-4 text-white">
        <div class="card-header border-white justify-content-between">
           <div className="col">FullName : {course.chauferName}</div>
          <div className="col text-end">{course._id}</div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Trip Details</h5>
          <h6 class="card-text" style={{marginBottom:"10px"}}>Registration Number : {course.matricule}</h6>
          <h6 class="card-text"style={{marginBottom:"10px"}}>Date(Start) : {course.createdAt.toString().substring(0,10)}</h6>
          <h6 className="col"style={{marginBottom:"10px"}}>Phone Number : {course.phoneNumber}</h6>
          <h6 className="col"style={{marginBottom:"10px"}}>Kilomitrage(Free) : {course.kilomitrage}</h6>
          <h6 className="col"style={{marginBottom:"10px"}}>Kilomitrage(Driver) : {course.kilomitragePaid}</h6>
          <h6 className="col"style={{marginBottom:"10px"}}>Price(1 Km) : {course.isFinished == true ? course.priceParKilomitre:<div className="bg-danger p-1 rounded" style={{width:"fit-content",display:"inline"}}>Not Yet!</div>}</h6>
          <h6 className="col"style={{marginBottom:"10px"}}>Departure : {course.Depart}</h6>
          <h6 className="col"style={{marginBottom:"10px"}}>Destination : {course.Destination}</h6>
<h6 className="col"style={{marginBottom:"10px"}}>Assurance : {course.isFinished == true || course.assurance != null ||course.assurance != undefined  ? course.assurance : <div className="bg-danger p-1 rounded" style={{width:"fit-content",display:"inline"}}>Not Yet!</div>}</h6>          <h6 className="col"style={{marginBottom:"10px"}}>Date(end) : {course.isFinished == true ? course.dateEndJourney.toString().substring(0,10):<div className="bg-danger p-1 rounded" style={{width:"fit-content",display:"inline"}}>Not Yet!</div>}</h6>
          <h6 className="col"style={{marginBottom:"10px",textDecoration:"none"}}>Gray Card : {course.isFinished == true ? <a style={{textDecoration:"none"}} href={course.cartGris}>Gray Card</a> : <div className="bg-danger p-1 rounded" style={{width:"fit-content",display:"inline"}}>Not Yet!</div>}</h6>
          <h6 style={{marginBottom:"10px"}}>Payment : {course.isFinished == true ? course.isPay == true ?   <div className="bg-danger p-1 rounded" style={{width:"fit-content",display:"inline"}}>Paid</div>: <div className="bg-danger p-1 rounded" style={{width:"fit-content",display:"inline"}}>Pending!</div> : <div className="bg-danger p-1 rounded" style={{width:"fit-content",display:"inline"}}>Not Yet!</div>}</h6>
            <h6 style={{marginBottom:"10px"}}>Status : {course.isAccepet == true ? course.isFinished == false?<div style={{width:"fit-content",display:"inline"}} className="bg-primary p-1 rounded">Driving!</div>:  <div className="bg-success p-1 rounded" style={{width:"fit-content",display:"inline"}}>Finish</div>:<div className="bg-warning p-1 rounded" style={{width:"fit-content",display:"inline"}}>Sent to driver!</div>}</h6>
         
          
        </div>
      </div> })
            
      
       
       )
}
export default CoursesBody