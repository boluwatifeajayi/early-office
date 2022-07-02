import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function ButtonField(props) {
  return (
    <div>
      
      
      <button className={props.buttonClass} disabled={props.disabled} onClick={props.onClick}>
        {props.buttonText}
      </button>

      
    </div>
  )
}
