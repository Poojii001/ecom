import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-house fs-2'></i><span className='float-end mt-2'>Home</span></Link>
                <Link to="/admin/maincategory" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-card-checklist fs-2'></i><span className='float-end mt-2'>Maincategory</span></Link>
                <Link to="/admin/subcategory" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-card-list fs-2'></i><span className='float-end mt-2'>Subcategory</span></Link>
                <Link to="/admin/brand" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-list-stars fs-2'></i><span className='float-end mt-2'>Brand</span></Link>
                <Link to="/admin/product" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-list-ol fs-2'></i><span className='float-end mt-2'>Product</span></Link>
                <Link to="/admin/features" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-list-check fs-2'></i><span className='float-end mt-2'>Features</span></Link>
                <Link to="/admin/faq" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-question-circle fs-2'></i><span className='float-end mt-2'>Faq</span></Link>
                <Link to="/admin/privicy-policy" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-bookmark-check fs-2'></i><span className='float-end mt-2'>Privicy-Policy</span></Link>
                <Link to="/admin/terms-conditions" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-person raised-hand fs-2'></i><span className='float-end mt-2'>Terms & Conditions</span></Link>
                <Link to="/admin/settings" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-house-gear fs-2'></i><span className='float-end mt-2'>Settings</span></Link>
                <Link to="/admin/newsletter" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-envelope fs-2'></i><span className='float-end mt-2'>Newletters</span></Link>
                <Link to="/admin/contactus" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-headphones fs-2'></i><span className='float-end mt-2'>Contact Us</span></Link>
                <Link to="/admin/checkout" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-cart-check fs-2'></i><span className='float-end mt-2'>Checkout</span></Link>
                <Link to="/admin/user" className="list-group-item mybackground text-light" aria-current="true" ><i className='bi bi-person fs-2'></i><span className='float-end mt-2'>User</span></Link>
               
            </div>
        </>
    )
}
