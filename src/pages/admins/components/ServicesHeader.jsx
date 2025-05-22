import { IoAddCircleSharp } from "react-icons/io5";
function AdminHeader() {
    return(
        <div className="row justify-content-between mx-1">
        <h2 className="text-white  col">Admins</h2>
        <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={()=>window.location.pathname="/admins/add"}>Add Admin <IoAddCircleSharp /></h2>
        </div>
    )
}
export default AdminHeader