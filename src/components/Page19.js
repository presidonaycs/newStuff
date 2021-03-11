// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';

// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Space, Alert, InputNumber, DatePicker, Upload } from 'antd';
import Page37Form from './Page37Form';
import Imagez from './Imagez';
import { Steps, Divider } from 'antd';
import { CloseOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function Page19(prop) {
    const { Option } = Select;

    return (
        <div className="page19">
             <div><CloseOutlined style={{fontSize:"25px", backgroundColor:"red", marginBottom:"10px", float:"right", color:"white", padding:"10px"}}/></div>
           <Page37Form/>
           <Imagez/>
           <div className="flex" style={{marginTop:"10px"}}>
               <Button block style={{backgroundColor:"green", color:"white", width:"100%"}}>Save Request</Button>
               <Button block style={{backgroundColor:"green", color:"white", width:"100%", marginLeft:"10px"}}>Submit Request</Button>
           </div>
        </div>
    );
}

export default Page19;


