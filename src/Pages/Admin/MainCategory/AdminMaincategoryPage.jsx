import React, { useEffect, useState } from 'react'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'


export default function AdminMaincategoryPage() {
  let [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        }
      })
      response = await response.json()
      setData(response)
    })()
  }, [])


  return (
    <>
      <div className='container-fluid my-3'>
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h6 className='mybackground text-light text-center p-2 fs-1'>Main Category
              <Link to="create"><i className='bi bi-plus text-light fs-1 float-end'></i></Link>
            </h6>

            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Pic</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => {
                    return <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <a href={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                          <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={70} width={100} alt="" />
                        </a>
                      </td>
                      <td>{item.status ? "Active" : "Inactive"}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
    </>
  )
}
