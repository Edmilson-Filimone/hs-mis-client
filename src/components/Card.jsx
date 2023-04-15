import React from 'react'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import {BsArrowRepeat} from 'react-icons/bs'

function Card({label, value, balance ,icon, iconBg}) {
  return (
    <div className='my-6'>
      <ul className='w-full md:w-[250px] h-[140px] 2xl:w-[300px] p-4 rounded-xl bg-white shadow-2xl'>
        <li className='flex justify-between mb-2'>
          <span className={`relative -top-8 flex justify-center items-center w-[65px] h-[65px] rounded-xl shadow-2xl ${iconBg} text-white`}>{icon}</span>
          <div>
            <span className='block text-right text-text-color text-[15px] font-light'>{label}</span>
            <span className='block text-right text-text-color text-2xl font-bold'>{value}</span>
          </div>
        </li>
        <li className='border-t pt-4 text-[15px] flex gap-1 items-center'>
          <div className={`${balance >= 0 ? 'text-green':'text-red-600'} flex gap-1 font-semibold pr-2`}>
            {
              balance > 0 ? 
              <span className='flex items-center'>
                <span>{`+${balance}`}</span>
                <AiOutlineArrowUp />
              </span>
              :
              balance == 0 || isNaN(balance)?
              <span className='flex items-center'>
              <span></span>
              <BsArrowRepeat/>
            </span>
            :
            <span className='flex items-center'>
            <span>{balance}</span>
            <AiOutlineArrowDown/>
          </span>
            }
          </div>
          <span className='text-text-color font-extralight'>{balance == 0 ? 'no changes': 'than last month'}</span>
        </li>
      </ul>
    </div>
  )
}

export default Card