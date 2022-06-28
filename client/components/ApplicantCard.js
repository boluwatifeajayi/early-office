import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonField from './ButtonField'

export default function JobCard(props) {
  return (
<div className='col-lg-4'>     
<div class="card w-100 job-card">
  <div class="card-body">
    <h6 className='fw-bold'>{props.profile}</h6>
    <p>{props.studentName}</p>
    <p className='mb-2'>{props.skills}</p>
    <ButtonField buttonText="More" buttonClass="short-btn"/>
  </div>
</div>


      
    </div>
  )
}
