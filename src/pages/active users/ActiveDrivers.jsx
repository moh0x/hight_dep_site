import axios from "axios";
import { baseURL, GETACTIVEDRIVERS } from "../../Api/api";

import { useEffect, useState } from "react";
import LoadingComponent from "../../components/layout/Load";
import ActiveDriversBody from "./components/ActiveDriversBody";
import ActiveDriversHeader from "./components/ActiveDrivers";
import { GiReturnArrow } from "react-icons/gi";
function ActiveDrivers() {
 
          const[activeDrivers,setActiveDrivers]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.get(`${baseURL}${GETACTIVEDRIVERS}`,{headers:{'token':token}}).then((res)=>{
                  if (res.status === 200) {
                     setActiveDrivers(res.data['data'])    
                  } else{      
                    setActiveDrivers([])
                  }
                  setLoad(false) 
                }).catch((err)=>{
                  setActiveDrivers([])
                  setLoad(false)               
                }); 
                  
              }
         
           useEffect(()=>getData(),[counter]);
            
    return(
     <section className="container my-4">
            <ActiveDriversHeader />
            {load == true ? <LoadingComponent />:  <ActiveDriversBody activeDrivers={activeDrivers} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default ActiveDrivers