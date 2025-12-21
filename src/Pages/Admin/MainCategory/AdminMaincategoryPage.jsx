import React, { useEffect, useState } from 'react'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'

import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';


export default function AdminMaincategoryPage() {
  let [data, setData] = useState([])

  async function deleteRecord(id) {
    if (window.confirm("Are You Sure You Want To Delete That Record :")) {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          // "authorization":"your auth key"
        }
      })
      response = await response.json()
      setData(data.filter(x => x.id !== id))
    }
  }

  useEffect(() => {
    let time = (async () => {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        }
      })
      response = await response.json()
      setData(response)
      let time = setTimeout(()=>{
        $('#myTable').DataTable()
      },500)
      return time
    })()
    return ()=>clearTimeout(time)
  }, [])


  return (
    <>
      <div className='container-fluid my-3'>
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h6 className='mybackground text-light text-center p-2 fs-1 mb-3'>Main Category
              <Link to="/admin/maincategory/create"><i className='bi bi-plus text-light fs-1 float-end'></i></Link>
            </h6>

             <div className='table-responsive'>
              <table id='myTable' className='table table-bordered'>
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
                        <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                          <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={70} width={100} alt="" />
                        </Link>
                      </td>
                      {/* <td>{item.pic}</td> */}
                      <td>{item.status ? "Active" : "Inactive"}</td>
                      <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary mybackground'><i className='bi bi-pencil fs-3'></i></Link></td>
                      <td><button className='btn btn-danger' onClick={()=>deleteRecord(item.id)}><i className='bi bi-trash fs-3'></i></button></td>
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
