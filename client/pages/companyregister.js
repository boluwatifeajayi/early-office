import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InputField from '../components/InputField'
import ButtonField from '../components/ButtonField'
import Link from 'next/link'
import Header from '../components/Header'

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
      <Header/>
      
      <div className='register-container '>
        <div className='row'>
        <div className='col-lg pl-4 emp-reg'>
                <h1 className='main-register-header'>Take Your Company Further With The Best interns</h1>
                <ul className='register-list'>
                    <li>Interns</li>
                    <li>Corpers</li>
                    <li>Skilled</li>
                    <li>Assessed</li>
                    <li>& More....</li>
                </ul>
            </div>
            <div className='col-lg'>
                <form className='register-form'>
                    <h5 className='text-center mb-3 fw-bold'>Create An Account</h5>

                    <div className='row'>
                        <div className='col-md'>
                        <InputField type="text" placeholder="First Name"/>
                        </div>
                        <div className='col-md'>
                        <InputField type="text" placeholder="Last Name"/> 
                        </div>
                    </div>
                    <InputField type="text" placeholder="Organisation Name"/>
                    <InputField type="email" placeholder="Offical Email Address"/>
                    <InputField type="number" placeholder="Phone Number"/>
                    <InputField type="password" placeholder="Password"/> 

                    
                    <ButtonField buttonText="Register" buttonClass="bt-background"/>
                    
                    <Link href="/login">
                    <p className='color mt-3 mb-2'>Already Have An Account ?</p>
                    </Link>
                      
                </form>
            </div>



        </div>
       
      </div>
      
    </div>
  )
}
