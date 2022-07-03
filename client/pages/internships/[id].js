import Head from 'next/head'
import ButtonField from '../../components/ButtonField'
import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useCookies } from 'react-cookie';
import { useRouter} from 'next/router'


export default function StudentProfile() {

  const [jobAvailability, setjobAvailability] = useState();
  const [reasonToBeHired, setreasonToBeHired] = useState();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies();
  const router = useRouter()
  const  id = router.query.id;




  const isauth = () => {
    if(!cookies.authToken){
      router.push('/login')
    }
    else{
      console.log("you are welcome")
    }
  }
    

  useEffect(() => {
    isauth();
  }, [])


  const submit = async (e) => {
    e.preventDefault();
    
    setError(null);
    setLoading(true)
    
    axios.post(`http://localhost:4070/api/jobs/${id}/apply`, {
        jobAvailability,
        reasonToBeHired
    } , { withCredentials: true, 
    }).then(response => {
        setLoading(false)
        router.push("/companyDashboard");
        // setcurrentStudentSession(response.data.authToken, response.data.currentCompany)
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





    

    const [job, setJob] = useState([]);

    const jobTitle = job.org
    const location = job.location

    // console.log(jobTitle.orgName)

   

    const client = axios.create({
        baseURL: `http://localhost:4070/api/jobs/id/${id}` 
      });

      // const client2 = axios.create({
      //   baseURL: `http://localhost:4070/api/jobs/${id}/apply` 
      // });

  useEffect(() => {
    client.get().then((response) => {
       setJob(response.data);
    });
 }, []);
  

  return (
    <div>
      <Head>
  
        <meta name="description" content="Generated by create next app" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      
      <Header/>
      <div className='job-container'>

        
       
       
        {/* <h1 className='main-job-heading'>{job.org.orgName}</h1> */}

        {/* <p className='color'>{jobTitle.orgName}</p> */} */
        {/* <p>{location.state}</p>
        
        <div className='row mt-3 mb-4'>
        <div className='col-md'>
            <b className='text-secondary'>Stipend</b>
            <p>{job.salary}</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Duration</b>
            <p>{job.duration}</p>
        </div>
        <div className='col-md'>
            <b className='text-secondary'>Posted</b>
            <p>{moment(job.createdAt, "YYYYMMDD=").fromNow()} </p>
        </div>

    </div>
    <p className='borderr text-secondary'>{job.jobType}</p>
    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>About Company</p>
    {/* <p className='job-text'>{jobTitle.orgDescription}</p> */}
    {/* <p className='link mt-3'>Visit Company Website</p> */}
    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>About Internship</p>
    <p>{job.jobResponsibility}</p>
    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>Skills Required</p>
    
    <p>{job.skillsNeeded}</p>
    

    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>Benefits</p>
    {job.benefits}

    

    <hr className='mt-3'/>
    <p className='sub-job-heading mt-2'>Additional Information</p>
    <p className='job-text'>{job.additionalInformation}</p>
    
      <div className='row mt-3 mb-4'>
        <div className='col-md'>
            <b className='text-secondary'>Number Of Openings</b>
            <p>{job.numberOfOpenings}</p>
        </div>
        </div>

        
        {/* <ButtonField buttonText="Apply Now" buttonClass="bt-background "/> */}


        <button type="button" class="bt-background" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Apply Now
        </button>


        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Apply {job.jobName}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={submit}>
              <textarea className="form-control mb-4" id="exampleFormControlTextarea1" rows="2" placeholder='How Long or how available are you for this role' onChange={e => setjobAvailability(e.target.value)}>{jobAvailability}</textarea>
              <textarea className="form-control mb-4" id="exampleFormControlTextarea1" rows="4" placeholder='Why Do You Think You Should Be Hired' onChange={e => setreasonToBeHired(e.target.value)}>{reasonToBeHired}</textarea>
              <ButtonField buttonText="Apply Now" buttonClass="bt-background "/>
              </form>
            </div>

            
            
          </div>
        </div>
        </div>
        
    </div>
    </div>
  )
}
