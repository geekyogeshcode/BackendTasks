import React from 'react'
import { useNavigate }  from 'react-router-dom'

const Home = () => {

    let navigate=useNavigate( )

  return (
    <div>Home
        <button onClick={() => navigate('/profile')} >
            Profile page 
        </button>
    </div>

  )
}

export default Home