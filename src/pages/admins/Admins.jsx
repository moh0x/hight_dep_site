import axios from "axios";
import { baseURL, GETADMINS, GETAdmins } from "../../Api/api";

import { useEffect, useState } from "react";
import LoadingComponent from "../../components/layout/Load";
import AdminHeader from "./components/ServicesHeader";
import AdminBody from "./components/AdminBody";
function Admins() {
          const[admins,setAdmins]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.get(`${baseURL}${GETADMINS}`,{headers:{'token':token}}).then((res)=>{
                  if (res.status === 200) {
                     setAdmins(res.data['data'])    
                  } else{      
                    setAdmins([])
                  }
                  setLoad(false) 
                }).catch((err)=>{
                  setAdmins([])  
                  setLoad(false)               
                }); 
                  
              }
           useEffect(()=>getData(),[counter]);
            
    return(
     <section className="container my-4">
            <AdminHeader />
            {load == true ? <LoadingComponent />:  <AdminBody admins={admins} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default Admins