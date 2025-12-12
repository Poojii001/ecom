import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
      {/* <!--------------- footer-section---------------> */}
      <section className="product footer">
        <div className="container">
          <div className="footer-service-section">
            <div className="row gy-4">
              <div className="col-lg-3  col-sm-6">
                <div className="service-wrapper free-shipping">
                  <div className="service-img">
                    <span>
                      <svg width="32" height="37" viewBox="0 0 36 37" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H5.63636V24.1818H35" stroke="#F9FFFB" stroke-width="2"
                          stroke-miterlimit="10" stroke-linecap="square" />
                        <path
                          d="M8.72763 35.0021C10.4347 35.0021 11.8185 33.6183 11.8185 31.9112C11.8185 30.2042 10.4347 28.8203 8.72763 28.8203C7.02057 28.8203 5.63672 30.2042 5.63672 31.9112C5.63672 33.6183 7.02057 35.0021 8.72763 35.0021Z"
                          stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10"
                          stroke-linecap="square" />
                        <path
                          d="M31.9073 35.0021C33.6144 35.0021 34.9982 33.6183 34.9982 31.9112C34.9982 30.2042 33.6144 28.8203 31.9073 28.8203C30.2003 28.8203 28.8164 30.2042 28.8164 31.9112C28.8164 33.6183 30.2003 35.0021 31.9073 35.0021Z"
                          stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10"
                          stroke-linecap="square" />
                        <path d="M34.9982 1H11.8164V18H34.9982V1Z" stroke="#F9FFFB" stroke-width="2"
                          stroke-miterlimit="10" stroke-linecap="square" />
                        <path d="M11.8164 7.17969H34.9982" stroke="#F9FFFB" stroke-width="2"
                          stroke-miterlimit="10" stroke-linecap="square" />
                      </svg>

                    </span>
                  </div>
                  <div className="service-content">
                    <h5 className="service-info service-title">Free Shipping</h5>
                    <p className="service-info service-details">When ordering over &#8377;1000</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-wrapper free-shipping">
                  <div className="service-img">
                    <span>
                      <svg width="32" height="37" viewBox="0 0 32 34" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M31 17.4492C31 25.6992 24.25 32.4492 16 32.4492C7.75 32.4492 1 25.6992 1 17.4492C1 9.19922 7.75 2.44922 16 2.44922C21.85 2.44922 26.95 5.74922 29.35 10.6992"
                          stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10" />
                        <path d="M30.7 2L29.5 10.85L20.5 9.65" stroke="#F9FFFB" stroke-width="2"
                          stroke-miterlimit="10" stroke-linecap="square" />
                      </svg>
                    </span>
                  </div>
                  <div className="service-content">
                    <h5 className="service-info service-title">Free Return</h5>
                    <p className="service-info service-details">Get Return within 7 days</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-wrapper free-shipping">
                  <div className="service-img">
                    <span>
                      <svg width="32" height="37" viewBox="0 0 32 38" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6654 18.668H9.33203V27.0013H22.6654V18.668Z" stroke="#F9FFFB"
                          stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
                        <path
                          d="M12.668 18.6654V13.6654C12.668 11.832 14.168 10.332 16.0013 10.332C17.8346 10.332 19.3346 11.832 19.3346 13.6654V18.6654"
                          stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10"
                          stroke-linecap="square" />
                        <path
                          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                          stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10"
                          stroke-linecap="square" />
                      </svg>
                    </span>
                  </div>
                  <div className="service-content">
                    <h5 className="service-info service-title">Secure Payment</h5>
                    <p className="service-info service-details">100% Secure Online Payment</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="service-wrapper free-shipping">
                  <div className="service-img">
                    <span>
                      <svg width="32" height="37" viewBox="0 0 32 35" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7" stroke="#F9FFFB" stroke-width="2"
                          stroke-miterlimit="10" />
                        <path d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25" stroke="#F9FFFB"
                          stroke-width="2" stroke-miterlimit="10" />
                        <path d="M16 28V22" stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10" />
                        <path d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                          stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10"
                          stroke-linecap="square" />
                        <path d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                          stroke="#F9FFFB" stroke-width="2" stroke-miterlimit="10"
                          stroke-linecap="square" />
                      </svg>
                    </span>
                  </div>
                  <div className="service-content">
                    <h5 className="service-info service-title">Best Quality</h5>
                    <p className="service-info service-details">Original Product Guarenteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="row gy-5">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-order">
                  <div className="logo">
                    <img src="/images/logos/logo-dark.png" style={{ height: 130 }} alt="logo" />
                  </div>


                  <div className="contact-info">
                    <div className="footer-link contact-link">
                      <div className="address">
                        <div className="icon mt-3">
                          <span>
                            <i className='border border-light p-3 rounded-circle bi bi-geo-alt fs-2 me-2 text-light'></i>
                          </span>
                        </div>
                        <div className="details">
                          <h4 className="footer-heading">Address:</h4>
                          <Link to={import.meta.env.VITE_APP_MAP1} target='_blank' rel='noreferrer'>{import.meta.env.VITE_APP_ADDRESS}</Link>
                        </div>
                      </div>
                      <div className="address">
                        <div className="icon mt-3">
                          <span>
                            <i className='border border-light p-3 rounded-circle bi bi-envelope fs-2 me-2 text-light'></i>
                          </span>
                        </div>
                        <div className="details">
                          <h4 className="footer-heading">Email:</h4>
                          <Link to={`mailto:${import.meta.env.VITE_APP_EMAIL}`} target='_blank' rel='noreferrer'>{import.meta.env.VITE_APP_EMAIL}</Link>
                        </div>
                      </div>

                      <div className="address">
                        <div className="icon mt-3">
                          <span>
                            <i className='border border-light p-3 rounded-circle bi bi-phone fs-2 me-2 text-light'></i>
                          </span>
                        </div>
                        <div className="details">
                          <h4 className="footer-heading">PHONE:</h4>
                          <Link to={`tel:${import.meta.env.VITE_APP_PHONE}`} target='_blank' rel='noreferrer'>{import.meta.env.VITE_APP_PHONE}</Link>
                        </div>
                      </div>

                      <div className="address">
                        <div className="icon mt-3">
                          <span>
                            <i className='border border-light p-3 rounded-circle bi bi-whatsapp fs-2 me-2 text-light'></i>
                          </span>
                        </div>
                        <div className="details">
                          <h4 className="footer-heading">Whatsapp:</h4>
                          <Link to={`https://wa.me/${import.meta.env.VITE_APP_WHATSAPP}`} target='_blank' rel='noreferrer'>{import.meta.env.VITE_APP_WHATSAPP}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="about-us">
                  <h4 className="footer-heading footer-title">
                    Quick Links
                  </h4>
                  <div className="footer-link about-link">
                    <ul>
                      <li><Link to="/"><i className='bi bi-caret-right fs-3'></i>Home</Link></li>
                      <li><Link to="/about"><i className='bi bi-caret-right fs-3'></i>About</Link></li>
                      <li><Link to="/shop"><i className='bi bi-caret-right fs-3'></i>Shop</Link></li>
                      <li><Link to="/features"><i className='bi bi-caret-right fs-3'></i>Features</Link></li>
                      <li><Link to="/testimonials"><i className='bi bi-caret-right fs-3'></i>Testimonials</Link></li>
                      <li><Link to="/faq"><i className='bi bi-caret-right fs-3'></i>Faq</Link></li>
                      <li><Link to="/contactus"><i className='bi bi-caret-right fs-3'></i>Contact Us</Link></li>
                      <li><Link to="/privicy-policy"><i className='bi bi-caret-right fs-3'></i>Privicy Policy</Link></li>
                      <li><Link to="/terms-conditions"><i className='bi bi-caret-right fs-3'></i>Terms And Conditions</Link></li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <h4 className="footer-heading footer-title">
                  News Letter
                </h4>
                <div className='my-5'>
                  <p className='text-light pb-3 mb-3'>{import.meta.env.VITE_APP_SITE_NAME} is your trusted online store offering quality products across fashion, electronics, furniture and daily essentials. We focus on delivering the best value with reliable service, trendy collections, and affordable prices. Our mission is to make shopping easy, convenient, and enjoyable for everyone, right from the comfort of your home.</p>
                  <p className='text-light'>Stay updated with the latest deals, new arrivals, and exclusive offers from Apni Dukan. Subscribe to our newsletter and never miss a chance to save big on your favorite products. Join our community today!</p>
                  <form action="" className='my-5'>
                    <div className='btn-group w-100'>
                      <input type="email" name="email" placeholder='Enter Your Email Address to Register' className='form-control p-2 fs-3' />
                      <button className='btn btn-primary .mybackground'><i className='bi bi-send fs-2 mt-2'></i></button>
                    </div>
                  </form>
                </div>
                <div className="header-contact">
                  <Link to={import.meta.env.VITE_APP_FACEBOOK} target='blank' rel='noreferrer'><span className='text-light me-5'><i className='border border-light p-3 rounded-circle bi bi-facebook fs-2'></i></span></Link>
                  <Link to={import.meta.env.VITE_APP_TWITTER} target='blank' rel='noreferrer'><span className='text-light me-5'><i className='border border-light p-3 rounded-circle bi bi-twitter fs-2'></i></span></Link>
                  <Link to={import.meta.env.VITE_APP_INSTAGRAM} target='blank' rel='noreferrer'><span className='text-light me-5'><i className='border border-light p-3 rounded-circle bi bi-instagram fs-2'></i></span></Link>
                  <Link to={import.meta.env.VITE_APP_LINKEDIN} target='blank' rel='noreferrer'><span className='text-light me-5'><i className='border border-light p-3 rounded-circle bi bi-linkedin fs-2'></i></span></Link>
                  <Link to={import.meta.env.VITE_APP_GITHUB} target='blank' rel='noreferrer'><span className='text-light me-5'><i className='border border-light p-3 rounded-circle bi bi-github fs-2'></i></span></Link>

                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className='text-center'>copyright@apnidukan.com</p>
        </div>
      </section>
    </>
  )
}
