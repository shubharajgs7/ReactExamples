import React from 'react'
import { useContext } from 'react'
import { userData } from './useContext1/ContextApi'

export default function Profile() {
    const {setName} = useContext(userData)
  return (
    <button onClick={()=>setName("You are a good programmer")}>Change Name</button>
  )
}
