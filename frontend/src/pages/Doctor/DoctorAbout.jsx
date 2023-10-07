import React from 'react';
import formatDate from '../../utils/formatDate';

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Suvam Roy</span>
        </h3>
        <p className="text__para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quibusdam a in hic veritatis aliquam reiciendis dolorem non magni? Ab illum quae accusantium nemo incidunt, odio illo a rerum ea quos blanditiis maiores eum fugiat cupiditate magni. Quidem adipisci iste odit iusto culpa, ea dolores ut consequatur fugit modi corporis.
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate("2015-10-09")} - {formatDate("2021-12-03")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Phd in Surgery</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>Apollo Hospital, Kolkata</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate("2010-11-08")} - {formatDate("2015-07-24")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>MD in surgery</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>Apollo Hospital, Chennai</p>
            </li>
        </ul>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formatDate("2010-08-11")} - {formatDate("2015-07-23")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. surgeon</p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>Nimhans, Bengaluru</p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formatDate("2015-08-27")} - {formatDate("2021-09-30")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>Surgeon</p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>R G Kar, Kolkata</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout;