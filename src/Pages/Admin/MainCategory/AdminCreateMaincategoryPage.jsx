import React from 'react'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'


export default function AdminCreateMaincategoryPage() {
  return (
    <>
      

      <div className='container-fluid my-3'>
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h5 className='mybackground text-light text-center p-2 fs-1'>Create Maincategory
              <Link to="admin/maincategory"><i className='bi bi-arrow-left text-light fs-1 float-end'></i></Link>
            </h5>
           
          </div>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </>
  )
}
