"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import UseSticky from "@/hooks/UseSticky"
import LoginModal from "@/modals/LoginModal"
import useAuth from "@/hooks/useAuth";
import logo_1 from "@/assets/images/logo/logo.png";

const HeaderOne = ({ style }: any) => {
   const { sticky } = UseSticky();

   const [loginModal, setLoginModal] = useState(false);
   const { isLoggedIn, login, logout } = useAuth(); // Use the custom hook

   const handleLoginSuccess = () => {
      login(); // Use the login function from the custom hook
      setLoginModal(false);
   };

   const handleLogout = () => {
      
      logout();
   }

   return (
      <>
         <header className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${sticky ? "fixed" : ""}`}>
            {!style && <div className="alert-wrapper text-center">
               <p className="fs-16 m0 text-white">The <Link href="/listing" className="fw-500">flash sale</Link> go on. The offer will end in — <span>This Sunday</span></p>
            </div>}
            <div className="inner-content gap-one">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="logo order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                           <Image src={logo_1} alt="" />
                        </Link>
                     </div>
                     <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           {!isLoggedIn? <li>
                              <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one" onClick={() => setLoginModal(true)}><i className="fa-regular fa-lock"></i> <span>Login</span></Link>
                           </li>
                           : <Link href="#" className="btn-one" onClick={handleLogout}><i className="fa-regular fa-lock"></i> <span>Logout</span></Link>}
                           <li className="d-none d-md-inline-block ms-3">
                              <Link href="/dashboard/add-property" className="btn-two" target="_blank"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></Link>
                           </li>
                        </ul>
                     </div>
                     <nav className="navbar navbar-expand-lg p0 order-lg-2">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                           <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </header>
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} onLoginSuccess={handleLoginSuccess} />
      </>
   )
}

export default HeaderOne
