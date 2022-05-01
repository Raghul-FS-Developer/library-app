import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {GiBookCover} from 'react-icons/gi'
function Totalbooks({myStorage}) {

    let user=myStorage.getItem('user')
    const[length,setLength]=useState('')
    const[length2,setLength2]=useState('')
    useEffect(()=>{
        getData()
    })

    let getData=async()=>{
        let res = await axios.get(`${URL}getbooks`)
        setLength(res.data.length)
        let res2 = await axios.post(`${URL}mybooks`,{user:user})
        setLength2(res2.data.data.length)
    }
  return (
      <>
    <div className='display-4 text-dark total'>Totally<h1 className='text-info mt-2'>{length}</h1>b<GiBookCover size={30} className='logs'/><GiBookCover size={30} className='logs'/>ks Here</div>
    <div className='display-4 text-dark total'>Totally<h1 className='text-info mt-2'>{length2}</h1>b<GiBookCover size={30} className='logs'/><GiBookCover size={30} className='logs'/>ks you Have</div>
    </>
    )
}

export default Totalbooks