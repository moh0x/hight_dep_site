import { useEffect, useState } from "react";
import { baseURL, GETCOURSES } from "../../Api/api";
import CoursesBody from "./components/CoursesBody";
import CoursesHeader from "./components/CoursesHeader";
import LoadingComponent from "../../components/layout/Load";
import axios from "axios";

function Courses() { 
   const[courses,setCourses]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.get(`${baseURL}${GETCOURSES}`,{headers:{'token':token}}).then((res)=>{
                  if (res.status === 200) {
                     setCourses(res.data['data'])    
                  } else{      
                    setCourses([])
                  }
                  setLoad(false) 
                }).catch((err)=>{
                  setCourses([])
                  setLoad(false)               
                }); 
                  
              }
          
           useEffect(()=>getData(),[counter]);
            
    return(
     <section className="container my-4">
            <CoursesHeader />
            {load == true ? <LoadingComponent />:  <CoursesBody courses={courses} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default Courses