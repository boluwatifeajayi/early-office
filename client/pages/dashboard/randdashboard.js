// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import InputField from '../../components/InputField'
// import ButtonField from '../../components/ButtonField'
// import Header from '../../components/Header'
// import { useState } from 'react'
// import axios from 'axios'
// import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Router from "next/router";
import { getcurrentStudent, removecurrentStudentSession, setcurrentStudentSession } from '../Utils/common'


export default function Dashboard() {

    const currentStudent = getcurrentStudent()

   const handleLogout = (e) => {
    e.preventDefault();
    removecurrentStudentSession();
    Router.push("/login");
   }

  return (
    <div>
        welcom {currentStudent.firstname}
        <input
            type="button"
            value="Logout"
            onClick={handleLogout}
        />
    </div>
  )
}


