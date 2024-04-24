import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black text-[#ffffffb3] p-4'>
        <div className="footer-wrapper max-w-[1200px] mx-auto p-4 py-12">
            <h3 className='text-base font-semibold text-left mb-5 underline'>Questions? Contact us</h3>
            <div className="footer__info mb-7">
                <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm underline'>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Help Center</Link></li>
                    <li><Link>Account</Link></li>
                    <li><Link>Media Center</Link></li>
                    <li><Link>Investor Relations</Link></li>
                    <li><Link>Jobs</Link></li>
                    <li><Link>Redeem Gift Cards</Link></li>
                    <li><Link>Buy Gift Cards</Link></li>
                    <li><Link>Ways to Watch</Link></li>
                    <li><Link>Terms of Use</Link></li>
                    <li><Link>Privacy</Link></li>
                    <li><Link>Cookie Preferences</Link></li>
                    <li><Link>Corporate Informations</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>Speed Test</Link></li>
                    <li><Link>Legal Notices</Link></li>
                    <li><Link>Only on Netflix</Link></li>
                </ul>
            </div>   
            <button className="btn mb-5">English</button>
            <p className='text-sm text-white/65'>Netflix Philippines</p>
        </div>
    </div>
  )
}

export default Footer















