import { IoAddCircleSharp } from "react-icons/io5";
import { ADDCOURSE, baseURL } from "../../Api/api";
import ErrAuth from "../../components/utility/ErrAuth";
import axios from 'axios';
import { useState } from "react";
import ValidtionErr from "../../components/utility/ValidErr";
import { FourSquare } from "react-loading-indicators";
import { useParams } from "react-router";
function AddCourse() {
  const params = useParams()
        const[load,setLoad]=useState(false);
        const[err,setErr]=useState(false);
        const[isClicked,setClicked]=useState(false);
        const[formData,setFormData] = useState({
            "matricule":"",
            "userId":params.id,
            "Destination":"",
            "Depart":"",
            "assurance":"",
            "kilomitrage":"",
            "marque":"",
            "priceParKilomitre":""
        }) 
        async function click(e) {
            if (formData.matricule.length < 1 || formData.matricule.length < 10 || formData.Depart.length < 3 || formData.Depart.length > 50 || formData.Destination.length < 3 || formData.Destination.length > 50 || formData.marque.length < 3 || formData.marque.length > 50 || formData.priceParKilomitre.length < 1|| formData.priceParKilomitre.length > 50 ) {
   
              e.preventDefault()
            } else {

              setLoad(true)
              let token = window.localStorage.getItem('token');
          await    axios.post(`${baseURL}${ADDCOURSE}`,
            formData
                      ,{headers:{'Content-Type':'application/json','token':token}}).then((res)=>{
                if (res.status === 200) {
                    window.location.href = '/drivers/active'       
                } else{      
                  setErr(true)
                }
              }).catch((err)=>{          
                setErr(true)       
              }); 
                 setLoad(false) 
            }
         
          }
          function formHandler(event) {
            setFormData({...formData,
              [event.target.name]:event.target.value
            })
          }
    return(
        <section className="container mt-4" style={{display:"flex",height:"80vh",justifyContent:"center",alignItems:"center"}}>
            <div className="input-group input-group-sm mb-3 mx-auto row  pb-4 " style={{width:"fit-content"}}>
             <div className="row text-center mb-4">
                    <h2 className="text-white">Add Trip</h2>
            </div>
        <div className="input-group-prepend w-75 mx-auto row">
        <input type="number" placeholder="Registration number" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="matricule"  onChange={(e)=>formHandler(e)}/>
        <input type="text" placeholder="Depart" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="Depart"  onChange={(e)=>formHandler(e)} minLength={3} maxLength={50}/>
        <input type="text" placeholder="Destination" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="Destination"  onChange={(e)=>formHandler(e)} minLength={3} maxLength={50}/>
        <input type="text" placeholder="assurance" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="assurance"  onChange={(e)=>formHandler(e)}/>
        <input type="text" placeholder="kilomitrage" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="kilomitrage"  onChange={(e)=>formHandler(e)} minLength={3} maxLength={50}/>
        <input type="text" placeholder="marque" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="marque"  onChange={(e)=>formHandler(e)}/>
        <input type="text" placeholder="price par kilomitre" className="form-control bg-dark text-white mb-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="priceParKilomitre"  onChange={(e)=>formHandler(e)}/>
        {load ? <div className='text-center'><FourSquare color="#3bc5f3" size="medium" text="" textColor="" /></div>: <h2 className="text-white col btn btn-primary fw-bold p-2" onClick={(e)=>click(e)}>Add Trip <IoAddCircleSharp /></h2>}
        <ErrAuth clicked={isClicked} err={err} type=""/>
        </div>
       
      </div>
      </section>
    )
}
export default AddCourse
