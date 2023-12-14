import {Button} from "antd";
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from "../component/NavBar";

export default function ContactPage() {

  const form = useRef();
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send('service_3wygx3u', 'template_p6wyyhb', {
      senderEmail,
      message
    }, 'BG8fz_8Cxun8YIhHv')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};

  return (
    <>
     <NavBar/>
    <div className="flex flex-col m-10 pr-20 pl-20"> 
    <div className="text-gray-700 mt-1 dark:text-white-80 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </div>
    
      <form ref={form} className="mt-5 flex flex-col dark:text-black ">

        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex justify-center"> 
        <Button
          className="mt-4 w-fukk sm:w-1/2 sm:ml-2 items-center justify-center bg-black text-white text-xl rounded-3xl h-14 hover:bg-gray-700 transition-all"
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
        </div>
    </form>
    </div>
    </>
  )
}

