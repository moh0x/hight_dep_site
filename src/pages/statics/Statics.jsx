import Counter from "./components/Counter"
import StaticCard from "./components/StaticCard"
import { FaUsers } from "react-icons/fa6";
import { MdAirplanemodeInactive } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { baseURL, GETSTATICS } from "../../Api/api";
import LoadingComponent from "../../components/layout/Load";
import { useState,useEffect} from "react";
import axios from "axios";
function Statics() {
const[statics,setStatics]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.get(`${baseURL}${GETSTATICS}`,{headers:{'token':token}}).then((res)=>{
                  if (res.status === 200) {
                     setStatics(res.data['data'])    
                  } else{      
                    setStatics([])
                  }
                  setLoad(false) 
                
                }).catch((err)=>{
                  setStatics([])
                
                  setLoad(false)               
                }); 
                  
              }
    
           useEffect(()=>getData(),[counter]);
     
           
    return(
       load == true ?<LoadingComponent /> : <div className="stats text-white bg-dark" id="stats">
        <h2>Our Statistics</h2>
        <div className="container">
        
  <StaticCard title="Active Drivers" icon={<FaUsers color="#3bc5f3" size={30}/>} counter={statics['activeUsers'] != undefined ?statics['activeUsers'] :0}/>
  <StaticCard title="InActive Drivers" icon={<MdAirplanemodeInactive color="#3bc5f3" size={30}/>} counter={statics['inActiveUsers']  != undefined ?statics['inActiveUsers'] :0}/>
  <StaticCard title="Completed Courses" icon={<FaClipboardCheck color="#3bc5f3" size={30}/>} counter={statics['complteCourses']  != undefined ?statics['complteCourses'] :0}/>
  <StaticCard title="InComplet Courses" icon={<FaRunning color="#3bc5f3" size={30}/>} counter={statics['inComplteCourses']  != undefined ?statics['inComplteCourses'] :0}/>
  <StaticCard title="Completed Payments" icon={<MdPayment color="#3bc5f3" size={30}/>} counter={statics['completPayments']  != undefined ?statics['completPayments'] :0}/>
  <StaticCard title="InComplet Payments" icon={<FaRunning color="#3bc5f3" size={30}/>} counter={statics['inCompletPayments']  != undefined ?statics['inCompletPayments'] :0}/>
        </div>
      </div>
    )
}
export default Statics