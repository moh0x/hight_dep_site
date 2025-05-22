import axios from "axios";
import { baseURL, GETSERVICES } from "../../Api/api";
import ServicesHeader from "./components/ServicesHeader"

import { useEffect, useState } from "react";
import LoadingComponent from "../../components/layout/Load";
import ServicesBody from "./components/ServicesBody";
function Services() {
          const[services,setServices]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.get(`${baseURL}${GETSERVICES}`,{headers:{'token':token}}).then((res)=>{
                  if (res.status === 200) {
                     setServices(res.data['data'])    
                  } else{      
                    setServices([])
                  }
                  setLoad(false) 
                }).catch((err)=>{
                  setServices([])
 
                  setLoad(false)               
                }); 
                  
              }
      
           useEffect(()=>getData(),[counter]);
            
    return(
     <section className="container my-4">
            <ServicesHeader />
            {load == true ? <LoadingComponent />:  <ServicesBody services={services} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default Services