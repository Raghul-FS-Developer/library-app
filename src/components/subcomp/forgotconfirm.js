import axios from 'axios'
import React, { useState} from 'react'
import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import URL from '../../db'

function Forgotconfirm() {

const navigate=useNavigate()

const params=useParams()

const[msg,setMsg]=useState("")
const[password,setPassword]=useState("")
const[newpassword,setNewpassword]=useState("")

 let handleSubmit=async(e)=>{
   e.preventDefault()
    
    if(password === newpassword){
        
       let res = await axios.post(`${URL}verify/${params.token}`,{
       password:password})


    if(res.data.statuscode==200){
     
     alert("password changed successfully")
     navigate("/login")
    
    }else{
        setMsg(res.data.message)
    }
}else{
     setMsg("Password Doesn't Match")
    }
}

  return (
    <>
  <div className="details">
     
     <div className="card-body">
       
               <div className="text-center">
                 <h3 className="display-3">Reset Password</h3>
               </div>
                <div className="p-3">
                 <form onSubmit={handleSubmit}>
                 
                   <div className="mb-3 ">
                     <label className="form-label" htmlFor="newpassword">
                     New Password
                     </label>
                     <input
                       className="form-control"
                       type="password"
                       id='newpassword'
                       onChange={(e)=>setNewpassword(e.target.value)}
                       required
                       placeholder='Enter Your New Password'
                     />
                   </div>
                   <div className="mb-3 ">
                     <label className="form-label" htmlFor="password">
                     Confrim Password
                     </label>
                     <input
                       className="form-control"
                       type="password"
                       id='password'
                       onChange={(e)=>setPassword(e.target.value)}
                       required
                       placeholder='Enter Your Confirm Password'
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

export default Forgotconfirm