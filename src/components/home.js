import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home({myStorage}) {
    let navigate = useNavigate()

    let user = myStorage.getItem('user')
    const handleStart=()=>{
        if(!user){
            navigate('/register')
        }else{
            navigate('/books')
        }
    }
  return (
        <div className='imp'>
    <img className='first' src='https://www.brettonwoodsproject.org/wp-content/uploads/2022/02/books.jpeg'/>
    <h3 className='display-4 text-white bg-dark second'>Welcome To Library App</h3>
    <button className='btn btn-info seconds' onClick={handleStart}>Get Started</button>
    </div>
  )
}

export default Home