import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonField from './ButtonField'
import Link from 'next/link'

export default function JobCard(props) {
  return (
    <div className='col-lg-6'>
      
      
<div class="card w-100 job-card">
  <div class="card-body">
    <h1 className='card-title'>{props.jobTitle}</h1>
    <p class="fw-bold mt-0 color">{props.company}</p>
    <p class="text-secondary mt-0 mb-3">{props.location}</p>
    <p className='borderr text-secondary'>{props.jobtype}</p>
    <div className='row mt-3 mb-4'>
        <div className='col-md'>
            <b className='text-secondary'>Stipend</b>
            <p>{props.salary}</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Duration</b>
            <p>{props.duration}</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Posted</b>
            <p>{props.deadline}</p>
        </div>
    </div>
    <Link href={props.link}>
       <ButtonField buttonText="More Details" buttonClass="short-btn"/>
    </Link>
    
  </div>
</div>


      
    </div>
  )
}
