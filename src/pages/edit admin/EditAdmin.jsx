import { IoAddCircleSharp } from "react-icons/io5";
import {  EDITADMIN, baseURL } from "../../Api/api";
import ErrAuth from "../../components/utility/ErrAuth";
import axios from 'axios';
import { useState } from "react";
import ValidtionErr from "../../components/utility/ValidErr";
import { FourSquare } from "react-loading-indicators";
import { useParams } from "react-router";
function EditAdmin() {
  const[isClicked,setClicked]=useState(false);
  const[phoneErr,setPhoneErr]=useState(false);
  const[passwordErr,setPasswordErr]=useState(false);
  const[load,setLoad]=useState(false);
  const[err,setErr]=useState(false);
  const _id = useParams()
  const[formData,setFormData] = useState({
      "email":"",
      "password":""
  }) 
  async function click(e) {
      if (formData.password.length < 8) {
        setClicked(true)
        if (formData.password.length < 8 ) {
          setPasswordErr(true)
        }else{
          setPasswordErr(false)
        }
        e.preventDefault()
      } else {
        console.log(formData);
        setClicked(true)   
        setPasswordErr(false)
        setLoad(true)
        let token = window.localStorage.getItem('token');
    await    axios.put(`${baseURL}${EDITADMIN}`,{
          _id:_id.id,password:formData.password
        },{headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
          if (res.status === 200) {
              window.location.href = '/admins'       
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
        <section className="mx-auto login-container" style={{display:"flex",height:"90vh",justifyContent:"center",alignItems:"center"}}>
                          <div className="input-group input-group-sm mb-3 mx-auto row  pb-4 " style={{width:"fit-content",objectFit:"cover"}}>
                           <div className="row text-center my-3 ">
                                  <img src={require('../../images/logo.PNG')} style={{width:"150px"}} className='mx-auto'></img>
                          </div>
                      <div className="input-group-prepend w-75 mx-auto  row">
                      <label htmlFor="password" className="text-white p-0 mb-2 ">Password</label>
                      <input minLength={8} maxLength={30}  type="text" placeholder="12345678" id="password" className={isClicked && passwordErr ? "form-control bg-dark text-white " :"form-control bg-dark text-white mb-3" }aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='password' value={formData.password} onChange={(e)=>formHandler(e)}/>
                      <div className='mb-3 p-0'>{isClicked && passwordErr ? <ValidtionErr err="The Password Is Invalid"/> :<></>}</div>
                      {load ? <div className='text-center'><FourSquare color="#3bc5f3" size="medium" text="" textColor="" /></div>: <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={(e)=>click(e)}>Edit Password</h2>}
                      <ErrAuth clicked={isClicked} err={err} type="login"/>
                      </div>
                     
                    </div>
                    </section>
    )
}
export default EditAdmin