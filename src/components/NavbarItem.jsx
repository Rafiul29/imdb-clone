"use client"

import Link from 'next/link'
import {useSearchParams} from "next/navigation"

const NavItem = ({title,param}) => {
  const searchParams=useSearchParams()
  const genre=searchParams.get("genre")

// 
  return (
    <Link  href={`/?genre=${param}`} className={`${genre && genre===param && "underline underline-offset-8 decoration-2 decoration-amber-500 rounded-lg"} text-2xl font-semibold  hover:text-amber-600 duration-300`}>{title}</Link>
  )
}

export default NavItem