import React from 'react'
import Breadcrum from '../../Components/Breadcrum'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

export default function AdminHomePage() {
  return (
    <>
    <Breadcrum title="Admin"/>

    <div className='container-fluid my-3'>
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar/>
        </div>
          <div className="col-md-9"></div>      
      </div>
    </div>
    <div style={{height:200}}></div>
    </>
  )
}
