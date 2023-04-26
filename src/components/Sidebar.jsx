import React, { useState } from 'react'
import {ArrowRightOnRectangleIcon, ClipboardDocumentListIcon, MapPinIcon, QuestionMarkCircleIcon, Square3Stack3DIcon, UserIcon} from '@heroicons/react/24/solid'
import {HiMenuAlt3} from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

function Sidebar({layout}) {
  
  const navigate = useNavigate()
  const location = (path) => {
    const currentpath = useLocation()
    return currentpath.pathname.split('/')[1] == path
}

// Collapse Sidebar
const [collapse, setCollapse] = useState(false)
const handleCollapse = ()=>{
  
  setCollapse(!collapse)
  //nao percebi o comporatamento desta seccao, na primeira vez que a function e chamada ela nao altera o estado para true, por isso fiz essa 
  if(!collapse){
    layout('sidebar-collapse')
  }
  if(collapse){
    layout('sidebar-expand')
  }

}

//Menu button
const [showMenu, setShowMenu] = useState(false)

  return (
    <aside className='sticky top-4 z-50 bg-sidebar md:min-h-[95vh] p-4 rounded-xl'>
      <div className='flex justify-between'>
        {!collapse && <div className='w-full md:h-28 md:text-2xl text-white md:text-center md:p-8 font-bold shadow-sm'>HS-MIS</div>}
        <button className='md:hidden' onClick={()=> setShowMenu(!showMenu)}>
          {!showMenu && <HiMenuAlt3 className='text-white text-2xl'/>}
          {showMenu && <AiOutlineClose className='text-white text-2xl' />}
        </button>
      </div>
      <nav>
        <ul className={`${!showMenu ? 'hidden': 'block h-screen mt-10'} md:block`}>
          <li className={`sidebar-item ${location('')?'bg-blue hover:bg-blue shadow-2xl font-semibold':'bg-transparent font-thin'}`} onClick={()=>{navigate('/'); setShowMenu(false)}}>
            <Square3Stack3DIcon className={collapse? 'sidebar-collapsed-icon' : 'sidebar-icon'}/>
            <span className={collapse ? 'hidden': ''}>Dashboard</span>
          </li>
          <li className={`sidebar-item ${location('report')?'bg-blue hover:bg-blue shadow-2xl font-semibold':'bg-transparent font-thin'}`} onClick={()=>{navigate('/report'); setShowMenu(false)}}>
            <ClipboardDocumentListIcon className={collapse? 'sidebar-collapsed-icon' : 'sidebar-icon'}/>
            <span className={collapse ? 'hidden': ''}>Monthly Report</span>
          </li>
          <li className={`sidebar-item ${location('map')?'bg-blue hover:bg-blue shadow-2xl font-semibold':'bg-transparent font-thin'}`} onClick={()=>{navigate('/map') ; setShowMenu(false)}}>
            <MapPinIcon className={collapse? 'sidebar-collapsed-icon' : 'sidebar-icon'}/>
            <span className={collapse ? 'hidden': ''}>Facilities Map</span>
          </li>
          <li className={`sidebar-item ${location('admin')?'bg-blue hover:bg-blue shadow-2xl font-semibold':'bg-transparent font-thin'}`} onClick={()=>{navigate('/admin') ; setShowMenu(false)}}>
            <UserIcon className={collapse? 'sidebar-collapsed-icon' : 'sidebar-icon'}/>
            <span className={collapse ? 'hidden': ''}>Administrator</span>
          </li>
          <li className={`sidebar-item ${location('sign-in')?'bg-blue hover:bg-blue shadow-2xl font-semibold':'bg-transparent font-thin'}`} onClick={()=>{navigate('/sign-in') ; setShowMenu(false)}}>
            <ArrowRightOnRectangleIcon className={collapse? 'sidebar-collapsed-icon' : 'sidebar-icon'}/>
            <span className={collapse ? 'hidden': ''}>Sign In</span>
          </li>
          <li className={`sidebar-item ${location('help')?'bg-blue hover:bg-blue shadow-2xl font-semibold':'bg-transparent font-thin'}`} onClick={()=>{navigate('/help') ; setShowMenu(false)}}>
            <QuestionMarkCircleIcon className={collapse? 'sidebar-collapsed-icon' : 'sidebar-icon'}/>
            <span className={collapse ? 'hidden': ''}>Help</span>
          </li>
          <li className={`sidebar-item-last hidden md:block`} onClick={handleCollapse}>{collapse ? <span className='text-[10px]'> Expand</span> : <span>Collapse</span>}</li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar