import React from 'react'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'


export default function AdminMainCategoryPage() {
  return (
    <>
      {/* <Breadcrum title="Admin"/> */}

      <div className='container-fluid my-3'>
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h5 className='mybackground text-light text-center p-2'>Maincategory
              <Link to="admin/maincategory/create"><i className='bi bi-plus text-light fs-1 float-end'></i></Link>
            </h5>
           
          </div>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </>
  )
}
