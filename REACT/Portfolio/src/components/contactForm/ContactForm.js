import React, {useState} from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import Btn from '../btn/Btn';
import { AiFillCheckCircle  } from "react-icons/ai";


const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

const ContactForm = () => {

  const [btnTitle] = useState('SKICKA');

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
      setToSend({...toSend, [e.target.name] : e.target.value})
  };


  const handleSubmit = (e) => {
      e.preventDefault();
      setSuccess(false);
      if(toSend.name === '' || toSend.email === '' || toSend.message === ''){
        setError('Vänligen fyll i alla fält innan du skickar')
      } else if (!toSend.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        setError('Vänligen ange en giltig e-postadress')
      } else {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, toSend, PUBLIC_KEY)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setToSend({name:'', email: '', message:''})
          setError('')
          setSuccess(true)
        })
        .catch((err) => {
            console.log('FAILED', err)
        })
      }
  }


  return (
    <form action="" className='form' onSubmit={handleSubmit}>
        <div className='validationMessage'>
          {
            success &&(
              <div className='success'>
                <p>Tack, ditt meddelande har skickats</p>
                <AiFillCheckCircle className='sentIcon'/>
              </div>
            )
          }
          <p>{error}</p>
        </div>
        <div className="inputGroup">
            <label className='formLabel' htmlFor="name">Namn</label>
            <input type="text" className='formInput' name='name' value={toSend.name} onChange={handleChange}/>
        </div>
        <div className="inputGroup">
            <label className='formLabel' htmlFor="email">E-postadress</label>
            <input type="text" className='formInput'  name='email' value={toSend.email} onChange={handleChange}/>
        </div>
        <div className="inputGroup">
            <label className='formLabel' htmlFor="message">Meddelande</label>
            <textarea  className='textarea'  name='message' value={toSend.message} onChange={handleChange}/>
        </div>
        <div className="btnDiv">
          <Btn btnTitle={btnTitle}/>
        </div>
    </form>
  )
}

export default ContactForm