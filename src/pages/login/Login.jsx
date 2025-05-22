import { useState } from 'react'
import ValidtionErr from '../../components/utility/ValidErr';
import  {FourSquare} from'react-loading-indicators'
import { baseURL, LOGIN } from '../../Api/api';
import axios from 'axios';
import ErrAuth from '../../components/utility/ErrAuth';
function Login() {
    const[isClicked,setClicked]=useState(false);
    const[phoneErr,setPhoneErr]=useState(false);
    const[passwordErr,setPasswordErr]=useState(false);
    const[load,setLoad]=useState(false);
    const[err,setErr]=useState(false);
    const[formData,setFormData] = useState({
        "email":"",
        "password":""
    }) 
    async function click(e) {
        if (formData.email.length < 8 || formData.password.length < 8) {
          setClicked(true)
          if (formData.email.length < 8) {
            setPhoneErr(true)
          }else{
            setPhoneErr(false)
          }
          if (formData.password.length < 8 ) {
            setPasswordErr(true)
          }else{
            setPasswordErr(false)
          }
          e.preventDefault()
        } else {
          console.log(formData);
          setClicked(true)   
          setPhoneErr(false)  
          setPasswordErr(false)
          setLoad(true)
      await    axios.post(`${baseURL}${LOGIN}`,{
            email:formData.email,password:formData.password
          },{headers:{'Content-Type':'application/json'}}).then((res)=>{
         
            if (res.status === 200) {
              window.localStorage.setItem('token',res.data['data']['token'])
              if (res.data['data']['isAdmin'] == true) {
                window.localStorage.setItem('admin',res.data['data']['isAdmin'])
              }
                window.location.href = '/'       
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
                    <label htmlFor="email" className="text-white p-0 mb-2">email</label>
                <input minLength={8} maxLength={30} type="text" placeholder="admin@gmail.com" id="email" className="form-control bg-dark text-white mb-1" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='email' value={formData.email} onChange={(e)=>formHandler(e)}/>
                {isClicked && phoneErr ? <ValidtionErr err="The Email Is Invalid"/> :<></>}
                <label htmlFor="password" className="text-white p-0 mb-2 ">Password</label>
                <input minLength={8} maxLength={30}  type="text" placeholder="12345678" id="password" className={isClicked && passwordErr ? "form-control bg-dark text-white " :"form-control bg-dark text-white mb-3" }aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='password' value={formData.password} onChange={(e)=>formHandler(e)}/>
                <div className='mb-3 p-0'>{isClicked && passwordErr ? <ValidtionErr err="The Password Is Invalid"/> :<></>}</div>
                {load ? <div className='text-center'><FourSquare color="#3bc5f3" size="medium" text="" textColor="" /></div>: <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={(e)=>click(e)}>Login</h2>}
                <ErrAuth clicked={isClicked} err={err} type="login"/>
                </div>
               
              </div>
              </section>
    )
}
export default Login