import Head from 'next/head'
import SearchField from '../components/SearchField'
import Header from '../components/Header'
import JobCard from '../components/JobCard'
// import Router from "next/router";
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'


const client = axios.create({
  baseURL: "http://localhost:4070/api/jobs" 
});



export default function StudentProfile() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    client.get().then((response) => {
       setJobs(response.data);
    });
 }, []);

  

  return (
    <div>
      <Head>
    
        <meta name="description" content="Generated by create next app" />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/> */}
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      
      <Header/>
      
      <div className='listing-container'>
        <SearchField/>
        <div className='row mt-3'>
        {jobs.map((job) => {
        return (
          <JobCard 
            jobTitle={job.jobName}
            company={job.org.orgName}
            location={job.location.state}
            jobtype={job.jobType}
            salary={job.salary}
            duration={job.duration}
            deadline={moment(job.createdAt, "YYYYMMDD=").fromNow()} 
            link={'/internships/'+job._id}
          />
       );
    })}
        {/* <JobCard 
            jobTitle="Marketer"
            company="Blackcopper Limited"
            location="Lagos"
            jobtype="Internship"
            salary="30,000"
            duration="3 months"
            deadline="july 3rd"
            
        />
        <JobCard 
            jobTitle="Graphics Designer"
            company="Blackcopper Limited"
            location="Lagos"
            jobtype="Internship"
            salary="30,000"
            duration="3 months"
            deadline="july 3rd"
           
        />
        <JobCard 
            jobTitle="Backend Developer"
            company="Blackcopper Limited"
            location="Lagos"
            jobtype="Internship"
            salary="30,000"
            duration="3 months"
            deadline="july 3rd"
          
        /> */}
        </div>
        
      
      </div>
      
    </div>
  )
}
