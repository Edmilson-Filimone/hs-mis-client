import { Cog6ToothIcon, HomeIcon, MagnifyingGlassIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = ()=>{
    let pathname = location.pathname.split('/').join(' / ') //just splited and joined for text style formating propose only
    let shrinkpathname = pathname.split('/')[1]
    let name
    
    if(shrinkpathname == ' '){
      name = 'home'
      pathname = '/ home'
    } 
    else if(shrinkpathname.includes('admin')){
      name = 'administrator'
    } 
    else {
      name = shrinkpathname
    }
    return {pathname, name}
  }
  
const[pathData,setPathData] = useState()  
useEffect(()=>{
  const {pathname, name} = path()
  setPathData({pathname, name})
},[location.pathname])

  

  //Scroll event for conditional styling
  const [onScroll, setOnScroll] = useState(false)

  window.addEventListener('scroll', ()=> {
    if(scrollY > 0 ){
      setOnScroll(true)
    } else{
      setOnScroll(false)
    }
  })

  //logout function
  const signOut = () => {
    auth.signOut();
    toast.info("You signed out");
    navigate("/");
  };

  return (
    <nav className={`sticky top-4 z-50 w-full flex items-center justify-between p-4 transition ease-in-out duration-150 ${onScroll ? 'bg-[rgba(255,255,255,0.9)] backdrop-blur shadow-lg rounded-lg' : 'bg-transparent'}`}>
      <div>
        <div className='flex space-x-2'>
          <HomeIcon className='text-gray-400' width={"16px"}/>
          <span className='capitalize font-semibold text-title-color'>{pathData?.pathname}</span>
        </div>
        <h4 className='capitalize font-bold text-lg text-title-color hidden md:block'>{pathData?.name}</h4>
      </div>
      <div className='flex justify-between md:w-[400px]'>
        <form className='relative hidden md:block'>
          <input className='border-2 bg-transparent p-2.5 rounded-md' type="text" placeholder='Search here'/>
        </form>
        <div className='flex justify-between shrink-0 w-[100px] cursor-pointer'>
            <UserCircleIcon className={`${onScroll ? 'text-title-color' : 'text-gray-500'}`} width={"20px"} />
            <Cog6ToothIcon className={`${onScroll ? 'text-title-color' : 'text-gray-500'}`} width={"20px"}/>
            <PowerIcon className={`${onScroll ? 'text-title-color' : 'text-gray-500'}  hover:text-red-600`} title='sign out' width={"20px"} onClick={signOut}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar