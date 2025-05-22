import { data } from 'jquery';
import React, { useState } from 'react';

const Filters = ({ filters, onChange ,activeDrivers,data,setActiveDrivers,onlineDriver,offlineDriver}) => {
    const [items,setItems] = useState(data);
  return (
    
    <div style={{ display: 'flex', justifyContent:"space-evenly", marginBottom: 20 }}>
      {/* Dropdown 1: Status */}
      <select name="status" value={filters.status} onChange={(e)=>e.target.value == "online" ?setActiveDrivers(onlineDriver):setActiveDrivers(offlineDriver) }>
        <option value="" >All Status</option>
        <option value="online"  >Active</option>
        <option value="offline" >Inactive</option>
      </select>

      {/* Dropdown 2: City */}
      <select name="city" value={filters.city} onChange={onChange}>
        <option value="">All Cities</option>
        <option value="Algiers">Algiers</option>
        <option value="Oran">Oran</option>
      </select>

      {/* Dropdown 3: Assurance */}
      <select name="assurance" value={filters.assurance} onChange={onChange}>
        <option value="">All Assurance</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default Filters;