import React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'


const FormSubscribe = () => {
  return (
    <>
      <form action="" className='flex flex-col md:flex-row gap-3 items-center justify-center mt-6'>
        <div className="input-wrapper m-0 md:w-[450px]">
          <input type="text" name='email' required className='basis-[375px]' />
          <label htmlFor="email">Email Address</label>
        </div>
         <button className='rounded-md bg-accent text-white text-xl md:text-2xl px-10 py-3 md:p-3 flex gap-3 items-center'>Get Started<PiCaretRightBold className='text-xl md:text-2xl'/></button>
      </form>
    </>
  )
}

export default FormSubscribe