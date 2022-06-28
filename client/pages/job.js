import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import ButtonField from '../components/ButtonField'
import SearchField from '../components/SearchField'
import Header from '../components/Header'
import JobCard from '../components/JobCard'

export default function StudentProfile() {
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
      
      <Header/>
      <div className='job-container'>
       
        <h1 className='main-job-heading'>Frontend Developer Intern (React Js)</h1>
        <p className='color'>Blackcopper Services Limited</p>
        
        <div className='row mt-3 mb-4'>
        <div className='col-md'>
            <b className='text-secondary'>Stipend</b>
            <p>30,000</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Duration</b>
            <p>4months</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Apply By</b>
            <p>5th july</p>
        </div>

    </div>
    <p className='borderr text-secondary'>Internship</p>
    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>About Company</p>
    <p className='job-text'>You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the  tag.
      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.</p>
    <p className='link mt-3'>Visit Company Website</p>
    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>About Internship</p>
    <ul>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        
    </ul>
    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>Skills Required</p>
    <ul>
        <li className='resp'>
        It is a long established fact that a reader will be 
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be 
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be 
        </li>
        
    </ul>
    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>Who Can Apply</p>
    <ul>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        
    </ul>

    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>Benefits</p>
    <ul>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        <li className='resp'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </li>
        
    </ul>

    

    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>Additional Information</p>
    <p className='job-text'>You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the  tag.
      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.</p>
    
      <div className='row mt-3 mb-4'>
        <div className='col-md'>
            <b className='text-secondary'>Number Of Openings</b>
            <p>4</p>
        </div>
        </div>
        <ButtonField buttonText="Apply Now" buttonClass="bt-background "/>
    </div>
    </div>
  )
}
