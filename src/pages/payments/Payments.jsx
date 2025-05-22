import { useEffect, useState } from "react";
import { baseURL, GETCOURSES, GETPAYMENTS, GETUSERCOURSES, GETUSERPAYMENTS } from "../../Api/api";
import CoursesBody from "./components/PaymentsBody";
import CoursesHeader from "./components/PaymentsHeader";
import LoadingComponent from "../../components/layout/Load";
import axios from "axios";
import { useParams } from "react-router";
import CoursesUserHeader from "./components/PaymentsHeader";
import PaymentsUserHeader from "./components/PaymentsHeader";
import PaymentsBody from "./components/PaymentsBody";
import PaymentsHeader from "./components/PaymentsHeader";

function Payments() { 
   const[payments,setPayments]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
          const id = useParams()
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.get(`${baseURL}${GETPAYMENTS}`,{headers:{'token':token}}).then((res)=>{
                  if (res.status === 200) {
                    setPayments(res.data['data'])    
                  } else{      
                    setPayments([])
                  }
                  setLoad(false) 
                }).catch((err)=>{
                  setPayments([])
       
                  setLoad(false)               
                }); 
                  
              }
          
           useEffect(()=>getData(),[counter]);
 
            
    return(
     <section className="container my-4">
            <PaymentsHeader />
            {load == true ? <LoadingComponent />:  <PaymentsBody payments={payments} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default Payments