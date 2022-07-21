import React ,{useState} from 'react'
import axios from 'axios'
import '../App.css' 
import URL from '../db'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Register() {
 
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setpassword]=useState('')
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const id = toast.loading("please wait...")
  let res = await axios.post(`${URL}register`,{username:username,email:email,password:password})
   

  if(res.data.statuscode === 200){
    toast.update(id,{render:'Check your mail for verification link',type:"success",isLoading:false,autoClose:true,closeButton:true})
  }else{
    toast.update(id,{render:res.data.message,type:"error",isLoading:false,autoClose:true,closeButton:true})
  }
}


  return (
    <>
    
     <div className="details">
     <ToastContainer/>
    <div className="card-body">
      
              <div className="text-center">
                <h3 className="display-4">Register</h3>
              </div>
               <div className="p-3">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="name">
                      Username
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id='name'
                      
                      onChange={(e)=>setUsername(e.target.value)}
                      required
                    />
                    
                       </div>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id='email'
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id='password'
                      onChange={(e)=>setpassword(e.target.value)}
                      required
                      minLength={8}
                      maxLength={14}
                    />
                  
                  </div>

                  <div className="">
                    <button
                      className="btn btn-outline-info"
                      
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form> 
                 </div> 
                </div>
                </div>
                
                </>
  )
}

export default Register