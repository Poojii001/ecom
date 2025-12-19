import React, { useState } from 'react'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidators from '../../../Validators/FormValidators'
import ImageValidators from '../../../Validators/ImageValidators'


export default function AdminCreateMaincategoryPage() {
    let [data, setdata] = useState({
        name: "",
        pic: "",
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Name Field is Mandatory",
        pic: "Pic Field is Mandatory"
    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
        let value = name === "pic" ? "maincategory/" + e.target.files[0].name : e.target.value

        setdata({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidators(e) : FormValidators(e) })
    }

    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            // alert(`
            //     Name : ${data.name}
            //     Pic : ${data.pic}
            //     Status : ${data.status}
            //     `)
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                    // "authorization":"your auth key"
                },
                body: JSON.stringify({ ...data })
            })
            response = await response.json()
            navigate("/admin/maincategory")
        }
    }
    return (
        <>
            <div className='container-fluid my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h6 className='mybackground text-light text-center p-2 fs-1 mb-3'>Create Maincategory
                            <Link to="/admin/maincategory"><i className='bi bi-arrow-left text-light fs-1 float-end'></i></Link>
                        </h6>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <input type="text" name="name" onChange={getInputData} placeholder='Maincategory Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'myborder'}`} />
                                    {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                </div>
                                <div className="col-md-6 mb-5">
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'myborder'}`} />
                                    {show && errorMessage.pic ? <p className='text-danger'>{errorMessage.pic}</p> : null}
                                </div>
                                <div className="col-md-6 mb-5">
                                    <select name="status" onChange={getInputData} className='form-select myborder'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div className="col-12 mb-5">
                                    <button className='btn btn-primary btn-lg w-100 mybackground p-3'>Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ height: 100 }}></div>
        </>
    )
}
