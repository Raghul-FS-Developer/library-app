import axios from 'axios'
import React, { useState} from 'react'
import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import URL from '../../db'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Forgotconfirm() {

const navigate=useNavigate()

const params=useParams()


const[password,setPassword]=useState("")
const[newpassword,setNewpassword]=useState("")

 let handleSubmit=async(e)=>{
   e.preventDefault()
    const id  = toast.loading('Please wait...')
    if(password === newpassword){
        
       let res = await axios.post(`${URL}verify/${params.token}`,{
       password:password})


    if(res.data.statuscode==200){
     
      toast.update(id,{render:"password changed successfully",isLoading:false,type:'success',autoClose:true,closeButton:true})
       setTimeout(()=>navigate("/login"),2000)
    
    }else{
       
        toast.update(id,{render:res.data.message,isLoading:false,type:'error',autoClose:true,closeButton:true})
    }
}else{
     toast.update(id,{render:"Password Doesn't Match",isLoading:false,type:'error',autoClose:true,closeButton:true,delay:1000})
    }
}

  return (
    <>
  <div className="details">
     <ToastContainer autoClose={2000}/>
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