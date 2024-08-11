// import React from 'react'
// import avalable from '../assets/avalable.png';
// import Button from './Button';

// const Find = () => {
//     return (
//         <div className='w-full py-8 px-4 sm:px-6 md:px-10 bg-[#ECECEC]'>
//             <div className='w-full bg-white max-w-[1240px] mx-auto p-6 sm:p-8 flex flex-col justify-center rounded-xl shadow-lg'>
//                 <h1 className='text-black text-2xl sm:text-3xl font-semibold mb-6'>Find A Doctor</h1>
//                 <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-end sm:space-x-4'>
//                     <div className='flex-grow space-y-4 sm:space-y-0 sm:flex sm:space-x-4'>
//                         <input 
//                             type="text" 
//                             placeholder='Name' 
//                             className='w-full sm:w-auto flex-grow border border-litegreen rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200'
//                         />
//                         <select 
//                             className='w-full sm:w-auto flex-grow border border-litegreen rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200'
//                         >
//                             <option value="0">Select Speciality</option>
//                             <option value="1">Cardiology</option>
//                             <option value="2">Dermatology</option>
//                             <option value="3">Endocrinology</option>
//                             <option value="4">Gastroenterology</option>
//                             <option value="5">Hematology</option>
//                             <option value="6">Infectious Disease</option>
//                             <option value="7">Nephrology</option>
//                             <option value="8">Neurology</option>
//                             <option value="9">Oncology</option>
//                             <option value="10">Pulmonology</option>
//                             <option value="11">Rheumatology</option>
//                         </select>
//                     </div>
//                     <div className='flex items-center justify-between sm:justify-end space-x-4'>
//                         <div className='flex items-center space-x-2'>
//                             <span className='text-sm font-medium'>Available</span>
//                             <img src={avalable} alt="Available" className='w-12 h-6'/>
//                         </div>
//                         <Button text="Search" className="w-full sm:w-auto px-6 py-2"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Find

import avalable from '../assets/avalable.png';
import Button from './Button';

const Find = () => {
    return (
        <div className='w-full py-8 px-4 sm:px-6 md:px-10 bg-[#ECECEC]'>
            <div className='w-full bg-white max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8 flex flex-col justify-center rounded-xl shadow-lg'>
                <h1 className='text-black text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6'>Find A Doctor</h1>
                <div className='flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:items-end md:space-x-4'>
                    <div className='flex-grow space-y-4 md:space-y-0 md:flex md:space-x-4'>
                        <input 
                            type="text" 
                            placeholder='Name' 
                            className='w-full md:w-auto flex-grow border border-litegreen rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200'
                        />
                        <select 
                            className='w-full md:w-auto flex-grow border border-litegreen rounded-md py-2 px-3 text-sm sm:text-base text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200'
                        >
                            <option value="0">Select Speciality</option>
                            <option value="1">Cardiology</option>
                            <option value="2">Dermatology</option>
                            <option value="3">Endocrinology</option>
                            <option value="4">Gastroenterology</option>
                            <option value="5">Hematology</option>
                            <option value="6">Infectious Disease</option>
                            <option value="7">Nephrology</option>
                            <option value="8">Neurology</option>
                            <option value="9">Oncology</option>
                            <option value="10">Pulmonology</option>
                            <option value="11">Rheumatology</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-between md:justify-end space-x-4'>
                        <div className='flex items-center space-x-2'>
                            <span className='text-xs sm:text-sm font-medium'>Available</span>
                            <img src={avalable} alt="Available" className='w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6'/>
                        </div>
                        <Button text="Search" className="w-full md:w-auto px-4 sm:px-6 py-2 text-sm sm:text-base"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find