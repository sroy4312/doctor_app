import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillInstagram } from 'react-icons/ai';

const socialIcons = [
  {
    path: "/home",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/home",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/home",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/home",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  },
]

const quickLinks01 = [
  {
    path: "/home",
    display: "home"
  },
  {
    path: "/home",
    display: "About us"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/home",
    display: "Blog"
  },
]

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a doctor"
  },
  {
    path: "/home",
    display: "Request an appointment"
  },
  {
    path: "/home",
    display: "Find a location"
  },
  {
    path: "/home",
    display: "Get a opinion"
  },
]

const quickLinks03 = [
  {
    path: "/home",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact us"
  },
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright © {year} developed by Suvam Roy</p>
            <div className='flex items-cnter gap-3 mt-4'>
              {
                socialIcons.map((item, index) => (
                  <Link className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' to={item.path} key={index}>{item.icon}</Link>
                ))
              }
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick links</h2>
            <ul>
              {
                quickLinks01.map((item,index) => (
                  <li key={index} className='mb-4'>
                    <Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to</h2>
            <ul>
              {
                quickLinks02.map((item,index) => (
                  <li key={index} className='mb-4'>
                    <Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
            <ul>
              {
                quickLinks03.map((item,index) => (
                  <li key={index} className='mb-4'>
                    <Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer