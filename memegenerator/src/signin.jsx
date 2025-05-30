import Header from "./header";
import { useNavigate } from 'react-router-dom';
import React  ,{useState}from "react";






 


function Signin(){
     const [formData, setFormData] = useState({  email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    setMessage(data.message);
        navigate("/main"); 
      

    } catch (err) {
      navigate("/signin");

    }
  };


    return(
        <>
    <Header/>
   
         <section className="p-10 bg-red-200 w-full h-[100vh]"> 
    
       
        <section className="h-[400px] w-[400px] m-auto bg-white p-4 rounded-xl  shadow-lg">
            <h1 className="text-center italic text-2xl font-bold font-serif">Sign in</h1>
            <form onSubmit={handleSubmit}>
            <section class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="enter your email" name="email" onChange={handleChange} required/>
                <label for="floatingInput">Email address</label>
              </section>
              <section class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} required/>
                <label for="floatingPassword">Password</label>
              </section>
           <section class="forgot pt-8 flex justify-around items-center">
            <button class="loginbutton bg-red-500 rounded-md text-white w-[100px] h-[40px]"  id="button1" type="submit">Sign in</button>
            {message && <p>{message}</p>}
            <a href=" /signup" className="text-black no-underline">Forgot Password?</a>
            
           </section>
        </form>
        </section>
        </section>
        
         


   
    </>
    );

}

export default Signin;