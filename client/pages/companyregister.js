import Head from 'next/head'
import ButtonField from '../components/ButtonField'
import Link from 'next/link'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
import { setcurrentStudentSession, getauthToken } from './Utils/common'
import Router from "next/router";

export default function Register() {
    const [adminFirstName, setadminFirstName] = useState('');
    const [adminLastName, setadminLastName] = useState('');
    const [orgEmail, setOrgEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [orgPassword, setOrgPassword] = useState('');
    const [orgName, setOrgName] = useState('')
    // const [orgDescription, setOrgDescription] = useState('');
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const submit = async (e) => {
        e.preventDefault();
        
        setError(null);
        setLoading(true)
        axios.post("http://localhost:4070/api/company/signUp", {
            adminFirstName,
            adminLastName,
            orgEmail,
            phoneNumber,
            orgPassword,
            orgName
        }, {withCredentials:true}).then(response => {
            setLoading(false)
            setcurrentStudentSession(response.data.authToken, response.data.currentCompany)
            Router.push("/companyProfile");
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
            <form onSubmit={submit} className='register-form'>
                    <h5 className='text-center mb-3 fw-bold'>Create An Account</h5>

                    <ButtonField buttonText="Register With Google" buttonClass="bt-outline"/>
                    <p className='text-center pt-2'>Or</p>
                    <div className='row'>
                        <div className='col-md'>
                        <input className='custom-input' placeholder="First Name" type="text" value={adminFirstName} onChange={e => setadminFirstName(e.target.value)} />
                        </div>
                        <div className='col-md'>
                        <input className='custom-input' placeholder="Last Name" type="text" value={adminLastName} onChange={e => setadminLastName(e.target.value)} />
                        </div>
                    </div>

                    <input className='custom-input' placeholder="Organization Name" type="text" value={orgName} onChange={e => setOrgName(e.target.value)} />

                    <input className='custom-input' placeholder="Organization Email" type="email" value={orgEmail} onChange={e => setOrgEmail(e.target.value)} />
                    
                    <input className='custom-input' placeholder="Phone Number" type="number" value={phoneNumber} onChange={e => setphoneNumber(e.target.value)} />
                    <input className='custom-input' placeholder="Password" type="password" value={orgPassword} onChange={e => setOrgPassword(e.target.value)} />
                    {error && <div className='mt-2 text-danger'>{error}</div>}

                    <ButtonField buttonText={loading ? "Loading...": "Register"} buttonClass="bt-background"/>
                    
                    <Link href="/companylogin">
                    <p className='color mt-3 mb-2'>Already Have An Account ?</p>
                    </Link>
                      
                </form>
            </div>



        </div>
       
      </div>
      
    </div>
  )
}