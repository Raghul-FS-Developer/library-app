import React,{useState} from 'react'
import axios from 'axios'

function Forgot() {
  
  const[email,setEmail]=useState()
  const[msg ,setMsg]=useState()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${URL}forgot-password`,{email:email})
    if(res.data.statuscode === 200){
      alert('Check your email for password reset link')
    }else{
      setMsg(res.data.message)
    }   
  }
  return (
    <>
    
    <div className="details">
     
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
                   <p className='text-danger'>{msg}</p>                   
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