import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import Image from "next/image";
import header3 from "../../public/assets/logo.gif";

export default function nav() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const email: any = sessionStorage.getItem("user");
    if (email) {
      setEmail(email);
    }
  }, []);

  const handleLogout = async () => {
    if (email) {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log out",
      });

      if (result.isConfirmed) {
        try {
          await sessionStorage.removeItem("user");
          Router.push("/login");
        } catch (error) {
          console.error("Error during handleLogout: ", error);
          alert("An error occurred during logout. Please try again later.");
        }
      } else {
        return;
      }
    } else {
      await sessionStorage.removeItem("user");
      Router.push("/login");
    }
  };


  return (

    <div className="navbar fixed top-0 left-0 right-0 bg-opacity-75 bg-base-300 text-neutral z-50">
      <div className="navbar-start">
        {/* <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >

            <li>
              <a>Diabetic Foot Ulcer (DFU)</a>
              <ul className="dropdown dropdown-hover">
                <li>
                  <a>What is DFU</a>
                </li>
                <li>
                  <a>DFU Detection</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Diabetic Acanthosis Nigricans (DAN)</a>
              <ul className="dropdown dropdown-hover">
                <li>
                  <a>What is DAN</a>
                </li>
                <li>
                  <a>DAN Detection</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Diabetic Nail Defects (DND)</a>
              <ul className="dropdown dropdown-hover">
                <li>
                  <a>What is DND</a>
                </li>
                <li>
                  <a>DND Detection</a>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}

        <a className="btn btn-ghost text-xl">Decoding Diabetics</a>
        <Image
          src={header3}
          width={70}
          height={70}
          alt="Picture of the author"
          style={{ borderRadius: 70 }}
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {email ? (
            <>

              <li>
                <Link href={"/"}>
                  <b> Home</b>
                </Link>
              </li>
              <li>
                <Link href={"/detections/acanthosisNigricans_detection"}>
                  <b> Acanthosis Nigricans Detection</b>
                </Link>
              </li>
              <li>
                <Link href={"/detections/footUlcer_detection"}>
                  <b> Foot ulcer Detection</b>
                </Link>
              </li>
              <li>
                <Link href={"/detections/nailDefects_detection"}>
                  <b>  Nail infections Detection</b>
                </Link>
              </li>
              <li>
                <Link href={"/detection"}>
                  <b> Diseases Detection</b>
                </Link>
              </li>

              {/* <li>
                <a>Item 3</a>
              </li> */}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>

      <div className="navbar-end" onClick={handleLogout}>
        <a className="btn">{email ? "Log out" : "Log in"}</a>
      </div>
    </div>
  );
}
