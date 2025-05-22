import axios from "axios";
import { baseURL, GETINACTIVEDRIVERS } from "../../Api/api";
import InActiveDriversHeader from "./components/InActiveDriversHeader"

import { useEffect, useState } from "react";
import LoadingComponent from "../../components/layout/Load";
import InActiveDriversBody from "./components/InActiveDriversBody";
function InActiveDrivers() {
          const[inActiveDrivers,setInActiveDrivers]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.get(`${baseURL}${GETINACTIVEDRIVERS}`,{headers:{'token':token}}).then((res)=>{
                  if (res.status === 200) {
                     setInActiveDrivers(res.data['data'])    
                  } else{      
                    setInActiveDrivers([])
                  }
                  setLoad(false) 
                }).catch((err)=>{
                  setInActiveDrivers([])   
                  setLoad(false)               
                }); 
                  
              }
           useEffect(()=>getData(),[counter]);
            
    return(
     <section className="container my-4">
            <InActiveDriversHeader />
            {load == true ? <LoadingComponent />:  <InActiveDriversBody inActiveDrivers={inActiveDrivers} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default InActiveDrivers