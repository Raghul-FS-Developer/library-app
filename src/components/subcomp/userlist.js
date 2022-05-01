import React,{useState ,useEffect}from 'react'
import axios from 'axios'
function Userlist() {
    const[data,setData]=useState([])

    useEffect(()=>{
     getData()
   },[])
  
   let getData=async()=>{
   let res = await axios.get(`${URL}alluser`)
   console.log(res)
     setData(res.data.data)
    }
  return (
    <>
     <h1 className='table display-2 text-info'>Users</h1>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Nickname</th>
                <th scope="col">Age</th>
                <th scope="col">Fav Book</th>
                <th scope="col">Fav Author</th>
                 
              </tr>
            </thead>
            <tbody >
              {data.map((e, i) => (
                <tr 
                key={i}
                >
                  <th scope="row">
                      
                      {i + 1}
                      </th>
                  <td className='use'>
                      
                      {e.username}
                  </td>
                  <td className='use2'>
                   
                    {e.nickname}
                  </td>
                  <td className='use2'>
                   
                    {e.age}
                  </td>
                  <td className='use2'>
    
                   {e.book} 
                 </td>
                  <td className='use2'>
                   
                    {e.author}
                  </td>
                                 
                </tr>
               ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Userlist