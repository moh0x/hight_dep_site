import { useEffect, useState } from "react";
import { baseURL, GETCOURSES, GETUSERCOURSES, GETUSERPAYMENTS } from "../../Api/api";
import CoursesBody from "./components/PaymentsBody";
import CoursesHeader from "./components/PaymentsUserHeader";
import LoadingComponent from "../../components/layout/Load";
import axios from "axios";
import { useParams } from "react-router";
import CoursesUserHeader from "./components/PaymentsUserHeader";
import PaymentsUserHeader from "./components/PaymentsUserHeader";
import PaymentsBody from "./components/PaymentsBody";

function UserPayments() { 
   const[payments,setPayments]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
          const id = useParams()
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.post(`${baseURL}${GETUSERPAYMENTS}`,{_id:id.id},{headers:{'token':token}}).then((res)=>{
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
            <PaymentsUserHeader id={id.id}/>
            {load == true ? <LoadingComponent />:  <PaymentsBody payments={payments} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default UserPayments