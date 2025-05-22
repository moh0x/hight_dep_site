import { IoAddCircleSharp } from "react-icons/io5";
function CoursesUserHeader(props) {
    return(
        <div className="row justify-content-between mx-1 m-r-4">
        <h2 className="text-white  col">Driver trips</h2>
        <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={()=>window.location.pathname=`/courses/add/${props.id}`}>Add Trip <IoAddCircleSharp /></h2>
        </div>
        
        
    )
}
export default CoursesUserHeader