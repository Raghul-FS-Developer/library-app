import React,{useState} from 'react'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Forgot() {
  
  const[email,setEmail]=useState()


  const handleSubmit=async(e)=>{
    e.preventDefault()
    const id = toast.loading("please wait...")
    let res = await axios.post(`${URL}forgot-password`,{email:email})
    if(res.data.statuscode === 200){
      toast.update(id,{render:"Check your email for password reset link",type:"success",isLoading:false,autoClose:true,closeButton:true})
  
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
                 <h3 className="display-3">Forgot Password</h3>
               </div>
                <div className="p-3">
                 <form onSubmit={handleSubmit}>
                 
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
                       placeholder='Enter Your Email address'
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

export default Forgot