import { IoAddCircleSharp } from "react-icons/io5";
function ServicesHeader() {
    return(
        <div className="row justify-content-between mx-1">
        <h2 className="text-white  col">Services</h2>
        <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={()=>window.location.pathname="/services/add"}>Add Service <IoAddCircleSharp /></h2>
        </div>
    )
}
export default ServicesHeader