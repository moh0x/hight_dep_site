import axios from "axios";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { useParams } from "react-router";
import { ADDPAYMENT, baseURL } from "../../../Api/api";
import { useState } from "react";
import LoadingComponent from "../../../components/layout/Load";
import { FourSquare } from "react-loading-indicators";
import ErrAuth from "../../../components/utility/ErrAuth";
function PaymentsUserHeader() {
    const[err,setErr]=useState(false)
    const[load,setLoad]=useState(false)
    const[clicked,setClicked]=useState(false)
     const params = useParams();
    async function click(e) {
    
          setClicked(true)
              setLoad(true)
              let token = window.localStorage.getItem('token');
          await    axios.post(`${baseURL}${ADDPAYMENT}`
                      ,{"userId":params.id},{headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
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
    return(
       
        load == true ?        <div style={{width:"fit-content",justifyContent:"center",alignContent:"center"}} className="mx-auto"><FourSquare color="#3bc5f3" size="large"  /></div> : <div className="row justify-content-between mx-1">
        <h2 className="text-white  col">Payments User</h2>
        <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={(e)=>click(e)}>Pay<MdPayment /></h2>
        {  <ErrAuth clicked={clicked} err={err} type=""/> }
        </div>
       
        
        
    )
}
export default PaymentsUserHeader