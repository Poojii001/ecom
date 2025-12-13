import React from 'react'

export default function AdminSidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active bi bi-house" aria-current="true" ></Link>
            </div>
        </>
    )
}
