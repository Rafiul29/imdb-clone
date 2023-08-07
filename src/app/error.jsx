"use client"
import { useEffect } from "react"

const Error = ({error,reset}) => {
 useEffect(()=>{
  console.log(error)
 },[error])

  return (
    <div className="text-center mt-14 space-y-5 text-xl">
      <h1>Something went wrong</h1>
      <button className="hover:text-white-600  font-semibold bg-amber-400 px-3 py-2 rounded-md hover:bg-amber-500 duration-500" onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default Error