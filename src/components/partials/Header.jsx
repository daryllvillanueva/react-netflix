import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../helpers/functions-general'

const Header = ({isLogin}) => { //the isLogin is the props
  return (
    <div>
        <header className='header py-5 px-2'>
            <div className='max-w-[1200px] w-full mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    <Link to="/home"><img src={`${baseImgUrl}/logo.png`} alt="" className='w-[148px] h-[55px] object-cover'/></Link>
                    {!isLogin && (
                        <ul className='flex gap-3 items-center'>
                        <li><button className="btn">English</button></li>
                        <li><Link className="btn btn-accent" to="/login">Sign Up</Link></li>
                        </ul>
                    )}
                   
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header