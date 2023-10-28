import React from 'react'
import { useContext } from 'react'
import { userData } from './useContext1/ContextApi'
export default function Home() {
    const {name} = useContext(userData)
  return (
    <div>{name}</div>
  )
}
