import React ,{useState} from 'react'
import URL from '../db'
import '../App.css' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Login({myStorage ,logged}) {
 
  const navigate = useNavigate()

  const[username,setUsername]=useState('')
  const[password,setpassword]=useState('')


  const handleSubmit=async(e)=>{
    e.preventDefault()
   const id =  toast.loading("Checking credential")
    let res = await axios.post(`${URL}login`,{username:username,password:password})
   
  if(res.data.statuscode === 200){
    let data = res.data.username
     myStorage.setItem('user',data)
     window.location.reload()
    //  navigate('/')
     
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
                <h3 className="display-3">logIn</h3>
              </div>
               <div className="p-3">
                <form onSubmit={handleSubmit}>
                
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="email">
                      Username
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id='email'
                      onChange={(e)=>setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className=" ">
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
                  

                  <a href='#' style={{width:'140px' ,float:'right'}} onClick={()=>navigate('/forgot')}>forgot password?</a>
                
                  <div className="mt-3">
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

export default Login