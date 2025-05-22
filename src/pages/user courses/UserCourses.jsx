import { useEffect, useState } from "react";
import { baseURL, GETCOURSES, GETUSERCOURSES } from "../../Api/api";
import CoursesBody from "./components/CoursesBody";
import CoursesHeader from "./components/CoursesUserHeader";
import LoadingComponent from "../../components/layout/Load";
import axios from "axios";
import { useParams } from "react-router";
import CoursesUserHeader from "./components/CoursesUserHeader";

function UserCourses() { 
   const[courses,setCourses]=useState([]);
          const[load,setLoad]=useState(false);
          const[counter,setCounter]=useState(0)
          const id = useParams()
           function getData() {
            setLoad(true)
                let token = window.localStorage.getItem('token');
                axios.post(`${baseURL}${GETUSERCOURSES}`,{_id:id.id},{headers:{'token':token}}).then((res)=>{
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
            <CoursesUserHeader id={id.id}/>
            {load == true ? <LoadingComponent />:  <CoursesBody courses={courses} counter={counter} setCounter={setCounter}/> }
        </section>
    )
}
export default UserCourses