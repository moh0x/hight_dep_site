import { IoAddCircleSharp } from "react-icons/io5";
import { ADDCOURSE, ADDPAYMENT, BANDRIVER, baseURL } from "../../Api/api";
import ErrAuth from "../../components/utility/ErrAuth";
import axios from 'axios';
import { useState } from "react";
import ValidtionErr from "../../components/utility/ValidErr";
import { FourSquare } from "react-loading-indicators";
import { useParams } from "react-router";
import { MdPayment } from "react-icons/md";

function Bloc() {
  const params = useParams()
        const[load,setLoad]=useState(false);
        const[err,setErr]=useState(false);
        const[isClicked,setClicked]=useState(false)
        const[formData,setFormData] = useState({  
            "_id":params.id,
            "banned":""
        }) 
        async function click(e) {
          if (formData['banned'].length >3 && formData['banned'].length <100) {
            setClicked(true)
              setLoad(true)
              let token = window.localStorage.getItem('token');
          await    axios.post(`${baseURL}${BANDRIVER}`,
            formData
                      ,{headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                if (res.status === 200) {
                    window.location.href = `/drivers/active` 
                       console.log(res);
                       
                } else{ 
                    console.log(res);     
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
                    <h2 className="text-white">Bloc User</h2>
            </div>
        <div className="input-group-prepend mx-auto row w-100">
        <input type="text" placeholder="Reason for ban" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="banned"  onChange={(e)=>formHandler(e)} minLength={3} maxLength={100}/>
        {load ? <div className='text-center'><FourSquare color="#3bc5f3" size="medium" text="" textColor="" /></div>: <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={(e)=>click(e)}>Ban</h2>}
        <ErrAuth clicked={isClicked} err={err} type=""/>
        </div>
       
      </div>
      </section>
    )
}
export default Bloc