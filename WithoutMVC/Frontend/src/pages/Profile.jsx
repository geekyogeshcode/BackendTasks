import React,{useEffect,useState} from 'react'
import axios from 'axios'


const Profile = () => {
  const [message,setMessage]=useState('')


  useEffect(() =>{
    axios.post('http://localhost:5000/profile')
    .then(response =>{
      setMessage(response.data.userID)
      
    })
  },[])



  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Profile