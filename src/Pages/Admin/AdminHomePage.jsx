import React from 'react'
// import Breadcrum from '../../Components/Breadcrum'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

export default function AdminHomePage() {
  return (
    <>
      {/* <Breadcrum title="Admin"/> */}

      <div className='container-fluid my-3'>
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h5 className='mybackground text-light text-center p-2'>Admin Profile</h5>
          </div>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </>
  )
}
