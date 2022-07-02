import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import ButtonField from '../components/ButtonField'
import { useState } from 'react'
import {useRouter} from "next/router";
import axios from 'axios'
import { setcurrentStudentSession, getauthToken } from './Utils/common'
import Router from "next/router";


export default function StudentProfile() {

  const [currentLocation, setcurrentLocation] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  
  
  const submit = async (e) => {
    e.preventDefault();
    
    setError(null);
    setLoading(true)
    
    axios.post("http://localhost:4070/api/student/profile/update", {
        currentLocation: currentLocation
    } , { withCredentials: true,
      
     
    }).then(response => {
        setLoading(false)
        setcurrentStudentSession(response.data.authToken, response.data.currentStudent)
        Router.push("/jobListing");
        console.log('response', response)
    }).catch(error => {
        setLoading(false);
        if(error.code === "ERR_BAD_REQUEST"){
            setError(error.response.data.error)
        }
        
        else{
            setError("something went wrong, Please Try again later")
        }
        console.error('error >>> ', error);
    });
}

  return (
    <div>
      <Head>
    
        <meta name="description" content="Generated by create next app" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      
      <div className='profile-container'>
        <h1 className='mb-4'>Set Up Your Profile</h1>
        <form onSubmit={submit}>
        <div className='row'>
          <div className='col-md profile-box'>
          <h5 className='mb-3 fw-bold text-center'>Personal Details</h5>
            <div className='row'>
                <div className='col-md'>
                <InputField type="text" placeholder="Gender"/>
                </div>
                <div className='col-md'>
                <InputField type="text" placeholder="Location"/> 
                </div>
            </div>

            <input className='custom-input' placeholder="First Name" type="text" value={currentLocation} onChange={e => setcurrentLocation(e.target.value)} />

            <InputField type="text" placeholder="Status (eg. Undergraduate, New Grad...)"/>
            <p className='text-secondary'>Upload CV</p>
            <InputField type="File" placeholder="Upload Cv"/>
            <InputField type="text" placeholder="Field Of Intrest One (eg. Graphics Design...)"/>
            <InputField type="text" placeholder="Field Of Intrest Two"/>
            
          </div>
          <div className='col-md profile-box'>
          <h5 className='mb-3 fw-bold text-center'>Education</h5>
          <InputField type="text" placeholder="Status (eg. Completed, Undergoing...)"/>
          

            <InputField type="text" placeholder="School (eg university Of Lagos)"/>
            <InputField type="text" placeholder="Course Of Study (eg computer science)"/>
            <div className='row'>
                <div className='col-md'>
                <InputField type="text" placeholder="Start Year"/>
                </div>
                <div className='col-md'>
                <InputField type="text" placeholder="End Year/Expected"/> 
                </div>
            </div>
            
                <InputField type="text" placeholder="GPA Class(optional)"/>
          </div>
          <div className='col-md profile-box'>
          <h5 className='mb-3 fw-bold text-center'>Experience</h5>
            
            <small>Work Experience(optional)</small>
            <div className='row'>
                <div className='col-md'>
                
                <InputField type="text" placeholder="Job Title"/>
                </div>
                <div className='col-md'>
                <InputField type="text" placeholder="Company"/> 
                </div>
            </div>

            <InputField type="text" placeholder="Skills(enter Up to five)"/>
            <InputField type="url" placeholder="link to any works or projects(optional)"/>
            <small>Certifications(optional)</small>
            <div className='row'>
                <div className='col-md'>
                
                <InputField type="text" placeholder="Certificate Title"/>
                </div>
                <div className='col-md'>
                <InputField type="text" placeholder="Giver Of Certificate"/> 
                </div>
            </div>
            <textarea className="form-control mb-4" id="exampleFormControlTextarea1" rows="3" placeholder='Tell us a bit about yourself including why you would make a good hire'></textarea>

            

          </div>
        </div>
        <div className='container-btn'>
        {error && <div className='mt-2 text-danger'>{error}</div>}
        <ButtonField buttonText="Submit" buttonClass="bt-background width"/>
        </div>
        
        </form>
        
      </div>
      
    </div>
  )
}
