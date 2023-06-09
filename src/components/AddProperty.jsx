import { useState } from 'react'
import Dropdown from './Dropdown';
const AddProperty = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [price, setPrice] = useState("")
    const [unit, setUnit] = useState(0)
    return ( 
        <div className="w-full bg-[#222] px-4 overflow-x-hidden lg:px-40 lg:px-40 py-[5rem] pb-[10rem]" >
            <div className="w-full pb-10 shadow-[0_4px_63px_rgba(0,0,0,0.15)] border-2 border-gray-500 rounded-[10px]" data-aos="zoom-in" data-aos-duration="2000">
                <div>
                    <h3 className="font-popins font-bold py-10 text-primary text-center text-[28px]">Add A New Property</h3>
                </div>
                <form action="">
                    <div className='grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 pt-3 px-10 gap-8'>
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>name <span className='text-primary'>*</span></label>
                            </div>
                            <div className="">
                                <input
                                type="text"
                                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                                placeholder="Enter Name" 
                                value={name}
                                onChange= {(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>Address <span className='text-primary'>*</span></label>
                            </div>
                            <div className="">
                                <input
                                type="text"
                                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                                placeholder="Enter Address" 
                                value={address}
                                onChange= {(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>Unit Number <span className='text-primary'>*</span></label>
                            </div>
                            <div className="">
                                <input
                                type="number"
                                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                                placeholder="Enter Unit" 
                                value={unit}
                                onChange= {(e) => setUnit(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>city <span className='text-primary'>*</span></label>
                            </div>
                            <div >
                                <Dropdown value={"select city"} />
                            </div>
                        </div>
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>state <span className='text-primary'>*</span></label>
                            </div>
                            <div >
                                <Dropdown value={"select state"} />
                            </div>
                        </div>
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>room type <span className='text-primary'>*</span></label>
                            </div>
                            <div >
                                <Dropdown value={"select room type"} />
                            </div>
                        </div>
                        
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>price <span className='text-primary'>*</span></label>
                            </div>
                            <div className="">
                                <input
                                type="number"
                                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                                placeholder="Enter Price" 
                                value={price}
                                onChange= {(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='py-2 '>
                                <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>room type <span className='text-primary'>*</span></label>
                            </div>
                            <div >
                                <Dropdown value={"select room type"} />
                            </div>
                        </div>
                    </div>
                    <div className='px-10'>
                       <div className='py-2 '>
                            <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>Description <span className='text-primary'>*</span></label>
                        </div> 
                        <textarea placeholder="Enter Description" className='w-full h-[151px] bg-[#F9F9F9] rounded border-2 p-4 border-[#E6E6E6]'></textarea>
                    </div>
                    <div className='px-10'>
                       <div className='py-2 '>
                            <label htmlFor="" className='text-white font-semibold font-popins text-[17px] capitalize'>Upload Photos</label>
                        </div> 
                        <div className="">
                            <input
                                type="file"
                                className="flex justify-center items-center w-full px-4 py-[3rem] text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-dashed border-primary rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                                placeholder="Drag your images here, or browse" 
                                value={name}
                                onChange= {(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center my-10'>
                        <button className="bg-primary w-[250px] h-[58px] lg:w-[513px] lg:h-[69.01px] xl:w-[513px] xl:h-[69.01px] flex justify-center items-center text-lg lg:text-xl text-white rounded-[10px]">Add New Property</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AddProperty;