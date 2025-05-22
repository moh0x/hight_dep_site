import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL, GETACTIVEDRIVERS } from '../../Api/api';
import LoadingComponent from '../../components/layout/Load';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Filters from './filter';

const getStatusColor = (status) => {
  switch (status) {
    case 'online': return '#34d399';   // أخضر
    case 'driving': return '#3b82f6';  // أزرق
    case 'offline': return 'red';  // رمادي
    default: return '#d1d5db';
  }
};

export default function DriverMap() {
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
                      console.log(err);   
                      setLoad(false)               
                    }); 
                      
                  }
             
               useEffect(()=>getData(),[counter]);
               console.log(activeDrivers);
            
               function FitBounds({ drivers }) {
                 const map = useMap();
               
                 if (!drivers || drivers.length === 0) return null;
               
                 const bounds = L.latLngBounds(drivers.map(driver => [driver.latitude ?? 0, driver.logtitude ?? 0]));
                 map.fitBounds(bounds, { padding: [40, 40] });
               
                 return null;
               }  
               const [filters, setFilters] = useState({
  status: '',
  city: '',
  assurance: '',
});    
const onlineDriver = activeDrivers.filter((activeDriver)=>activeDriver.status == "online");
const offlineDriver = activeDrivers.filter((activeDriver)=>activeDriver.status == "offline");
  return (
load == true ? <LoadingComponent />:  

  
    <MapContainer style={{ height: '100vh', width: '80vw' }} maxZoom={15}>

      <TileLayer
    
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
<FitBounds drivers={activeDrivers}/>
      {activeDrivers.map(driver => (
        <Marker
          key={driver.id}
          position={[driver.latitude ?? 0, driver.logtitude ?? 0]}
          icon={L.divIcon({
            className: 'custom-marker',
            html: `
              <div class="driver-card">
                <div class="card-header" style="background-color: ${getStatusColor(driver.status)}20;">
                  <div class="status-dot" style="background-color: ${getStatusColor(driver.status)};"></div>
                  <span class="driver-name">${driver.fullname}</span>
                </div>
                <div class="card-body">
                  <span class="driver-status">
                    ${driver.status === 'active' ? 'Active' : driver.status === 'driving' ? 'Driving' : 'Offline'}
                  </span>
                  <div class="driver-status">
                    0791417023
                  </div>
                </div>
              </div>
            `,
            iconSize: [60, 60],
            iconAnchor: [65, 30],
          })}
        />
      ))}
    </MapContainer>

  );
}