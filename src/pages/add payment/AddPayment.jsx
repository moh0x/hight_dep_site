import { IoAddCircleSharp } from "react-icons/io5";
import { ADDCOURSE, ADDPAYMENT, baseURL } from "../../Api/api";
import ErrAuth from "../../components/utility/ErrAuth";
import axios from 'axios';
import { useState } from "react";
import ValidtionErr from "../../components/utility/ValidErr";
import { FourSquare } from "react-loading-indicators";
import { useParams } from "react-router";
import { MdPayment } from "react-icons/md";
function AddPayment() {
  const params = useParams()
        const[load,setLoad]=useState(false);
        const[err,setErr]=useState(false);
        const[isClicked,setClicked]=useState(false)
        const[formData,setFormData] = useState({  
            "userId":params.id,
            "earnedOfCourses":"",
            "payFromCompany":"",
            "cash":"",
            "commision":"",
        }) 
        async function click(e) {
          setClicked(true)
              setLoad(true)
              let token = window.localStorage.getItem('token');
          await    axios.post(`${baseURL}${ADDPAYMENT}`,
            formData
                      ,{headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                if (res.status === 200) {
                    window.location.href = `/payments/${params.id}`       
                } else{      
                  setErr(true)
                }
              }).catch((err)=>{           
                setErr(true)       
              }); 
                 setLoad(false) 
            
         
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
                    <h2 className="text-white">Add Payment</h2>
            </div>
        <div className="input-group-prepend w-75 mx-auto row">
        <input type="text" placeholder="Total Earn" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="earnedOfCourses"  onChange={(e)=>formHandler(e)} minLength={3} maxLength={50}/>
        <input type="text" placeholder="Pay From Company" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="payFromCompany"  onChange={(e)=>formHandler(e)} minLength={3} maxLength={50}/>
        <input type="text" placeholder="Cash" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="cash"  onChange={(e)=>formHandler(e)}/>
        <input type="text" placeholder="commission" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="commision"  onChange={(e)=>formHandler(e)}/>
        {load ? <div className='text-center'><FourSquare color="#3bc5f3" size="medium" text="" textColor="" /></div>: <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={(e)=>click(e)}>Add Payment <MdPayment /></h2>}
        <ErrAuth clicked={isClicked} err={err} type=""/>
        </div>
       
      </div>
      </section>
    )
}
export default AddPayment