import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonField from './ButtonField'

export default function JobCard(props) {
  return (
    <div className='col-lg-6'>
      
      
<div class="card w-100 job-card">
  <div class="card-body">
    <h1 className='card-title'>{props.jobTitle}</h1>
    
   
    <div className='row mt-3 mb-4'>
        <div className='col-md'>
            <b className='text-secondary'>Status</b>
            <p>{props.status}</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Applicants</b>
            <p>{props.applicants}</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Actions</b>
            <p>{props.actions}</p>
        </div>
    </div>
    <ButtonField buttonText="More Details" buttonClass="short-btn"/>
  </div>
</div>


      
    </div>
  )
}
