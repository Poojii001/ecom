import React from 'react'
// import Breadcrum from '../../Components/Breadcrum'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

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
            <h5 className='mybackground text-light text-center p-2'>Admin Profile</h5>
            <table className='table table-bordered table-striped'>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Pooja Pal</td>
                </tr>
                <tr>
                  <th>User Name</th>
                  <td>pooja</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>poojapal5781@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>9506580566</td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </>
  )
}
