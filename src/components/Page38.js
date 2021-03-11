import React from 'react'
import {Button, Upload} from "antd"
import { UploadOutlined } from '@ant-design/icons';
import Page38Table from './Page38Table'
import 'antd/dist/antd.css';
import './index.css';



function Page38(props){

    return(
        <div className="Page38 background">

         <div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
<div className='padding border colorW marginBottom'>
    MDA Request Approval Sequence
    {/* <p>{Page38Divs[0].div1}</p> */}
</div>
   </div>
         <div>
             <Page38Table/>
             <div className='padding border colorW ' style={{marginTop:"10px"}}>
   User Management
</div>
         </div>

        </div>

    )
}export default Page38