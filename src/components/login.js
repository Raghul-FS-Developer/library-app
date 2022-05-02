import React ,{useState} from 'react'
import URL from '../db'
import '../App.css' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login({myStorage ,setLogged}) {
 
  const navigate = useNavigate()

  const[username,setUsername]=useState('')
  const[password,setpassword]=useState('')
  const[msg,setMsg]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${URL}login`,{username:username,password:password})
   
  if(res.data.statuscode === 200){
     myStorage.setItem('user',res.data.username)
     setLogged(true)
     navigate('/')
  }else{
    setMsg(res.data.message)
  } 
  
  }
    

  return (
    <>
    
     <div className="details">
     
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
                  
                  <p className='text-danger' style={{margin:0}} >{msg}</p>
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