// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Space, Alert, InputNumber, DatePicker, Upload } from 'antd';
import { Steps, Divider } from 'antd';
import { CloseOutlined, SolutionOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';



function Page23(prop) {
    const { Option } = Select;
    return (
        <div className="page23 padding " >
 
 
 <div className="flex-align-top" style={{maxWidth:"400px"}}>
     <div style={{width:"100%"}}>
         <div style={{padding:"3px"}} class="flex-between flex-align ">
             <p style={{ fontWeight:"bold", }}>Please enter your password to approve</p>
             <div style={{}}>
                 <img src="./Images/logo512.png" width="30" height="30" style={{borderRadius:"50%", marginBottom:""}}  />
             </div>
         </div>
         <Divider style={{margin:"5px 0"}}/>
        <div style={{padding:"5px 0"}}>
            <Input style={{border:"none", marginTop:"10px", padding:"5px"}}/>
        </div>
        <Button block style={{
             
            
             fontWeight:"bold", border:"none", color:"white", marginTop:"10px", backgroundColor:"#1C811C"}}>Continue</Button>
     </div>
     <div style={{padding:""}}><CloseOutlined style={{fontSize:"30px", backgroundColor:"red", color:"white", padding:"5px", marginLeft:"15px"}} /></div>
 </div>

        </div>
    );
}

export default Page23;


