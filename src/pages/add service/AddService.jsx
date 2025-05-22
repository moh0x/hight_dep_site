import { IoAddCircleSharp } from "react-icons/io5";
import { ADDSERVICES, baseURL } from "../../Api/api";
import ErrAuth from "../../components/utility/ErrAuth";
import axios from 'axios';
import { useState } from "react";
import ValidtionErr from "../../components/utility/ValidErr";
import { FourSquare } from "react-loading-indicators";
function AddServices() {
    const[isClicked,setClicked]=useState(false);
        const[serviceNameErr,setserviceNameErr]=useState(false);
        const[load,setLoad]=useState(false);
        const[err,setErr]=useState(false);
        const[formData,setFormData] = useState({
            "serviceName":"",
        }) 
        async function click(e) {
            if (formData.serviceName.length < 3 || formData.serviceName.length > 50 ) {
              setClicked(true)
              setserviceNameErr(true)
              e.preventDefault()
            } else {
              setClicked(true)   
              setserviceNameErr(false)
              setLoad(true)
              let token = window.localStorage.getItem('token');
          await    axios.post(`${baseURL}${ADDSERVICES}`,{
            serviceName:formData.serviceName,
                      },{headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                if (res.status === 200) {
                    window.location.href = '/services'       
                } else{      
                  setErr(true)
                }
              }).catch((err)=>{           
                setErr(true)       
              }); 
                 setLoad(false) 
            }
         
          }
          function formHandler(event) {
            setFormData({...formData,
              [event.target.name]:event.target.value
            })
          }
    return(
        <section className="container" style={{display:"flex",height:"60vh",justifyContent:"center",alignItems:"center"}}>
            <div className="input-group input-group-sm mb-3 mx-auto row  pb-4 " style={{width:"fit-content"}}>
             <div className="row text-center my-3 ">
                    <h2 className="text-white">Add Service</h2>
            </div>
        <div className="input-group-prepend w-75 mx-auto row">
        <input type="text" placeholder="Service Name" className="form-control bg-dark text-white " aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="serviceName"  onChange={(e)=>formHandler(e)}/>
        <div className="mb-4 p-0">{isClicked && serviceNameErr ? <ValidtionErr err="The Service Name Is Invalid"/> :<></>}</div>
        {load ? <div className='text-center'><FourSquare color="#3bc5f3" size="medium" text="" textColor="" /></div>: <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={(e)=>click(e)}>Add Service <IoAddCircleSharp /></h2>}
        <ErrAuth clicked={isClicked} err={err} type=""/>
        </div>
       
      </div>
      </section>
    )
}
export default AddServices