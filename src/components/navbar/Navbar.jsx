"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const session = useSession();

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Sailfire
        </Link>
        <div className="links">
          <DarkModeToggle />                     
              <div className={click ? "nav-options active" : "nav-options"}>
                <div className="option-three">
                  <ul className="linnk" onClick={handleClick}>                    
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/portfolio' ><li>Portfolio</li></Link>
                    <Link href='/blog' ><li>Blog</li></Link>
                    <Link href='/about' ><li>About</li></Link>
                    <Link href='/contact' ><li>Contact</li></Link>
                    <Link href='/dashboard' ><li>Dashboard</li></Link>                   
                  </ul>
                </div>
              </div>
            
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div>
        <div className={styles.mobilemenu}>
          <div style={{ marginTop: "8px" }} onClick={handleClick}>
            {click ? <RxCross2 /> : <HiOutlineBars3BottomRight />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;