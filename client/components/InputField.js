import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function InputField(props) {
  return (
    <div>
      
      
      <input className='custom-input' placeholder={props.placeholder} type={props.type} />

      
    </div>
  )
}
