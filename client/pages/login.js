import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import ButtonField from '../components/ButtonField'

export default function Register() {
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
      
      <div className='container'>
        <div className='row'>
            <div className='col-lg down'>
                <h1 className='main-register-header'>Welcome <br/>Back</h1>
                <p>Login to your account to continue</p>
                {/* <ul className='register-list'>
                    <li>Internships</li>
                    <li>Partime Gigs</li>
                    <li>Remote Internships</li>
                    <li>NYSC</li>
                    <li>Benefits</li>
                    <li>& More....</li>
                </ul> */}
            </div>
            <div className='col-lg'>
                <form className='register-form'>
                    <h4 className='text-center mt-4 mb-3 fw-bold'>Login To Your Account</h4>

                    <ButtonField buttonText="Login With Google" buttonClass="bt-outline"/>
                    <p className='text-center pt-2'>Or</p>
                    

                    <InputField type="text" placeholder="Email Address Or Phone Number"/>
                    
                    <InputField type="password" placeholder="Password"/> 

                    <ButtonField buttonText="Login" buttonClass="bt-background"/>

                    <p className='mt-3 text-center color'>Don't Have An Account Yet ?</p>
                         
                </form>
            </div>
        </div>
      </div>  
    
  
      
    </div>
  )
}
