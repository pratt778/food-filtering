import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from 'react';

const Nav = ()=>{
    const [active,setActive]=useState(false);
    return <>
    <section className='w-full'>
        <div className="nav-container w-full  max-w-[1200px] mx-auto p-3 flex items-center gap-[5%] sm:gap-[3%]">
            <div className="toggle" onClick={()=>setActive(!active)}>
                {(active==false)?<AiOutlineMenu/>:<AiOutlineClose/>}
            </div>
            <h1 className='font-bold'>
                Food <span className='text-red-700'>Del</span>
            </h1>
            <div className='flex gap-1 bg-gray-400 px-0 py-0 rounded-3xl'>
                <p className='bg-black text-white px-2 py-2 rounded-3xl'>Delivery</p>
                <p className='py-2 px-2 font-semibold'>Pickup</p>
            </div>
            <div className='hidden'>
                <AiOutlineSearch/>
                <input type="text" placeholder='Search foods...' />
            </div>
            <div className=' w-full bg-slate-200 rounded-3xl items-center h-fit text-xl py-2 max-w-[700px]   hidden sm:flex sm:px-2 '>
                         <AiOutlineSearch className='text-black w-[50px]'/>
                        <input type="text" placeholder='Search foods...' className='bg-transparent outline-none' />
                    </div>
            <button className='flex items-center gap-1'>
                <AiOutlineShoppingCart/>
                <span>Cart</span>
            </button>

            <nav className={active==true?"sidebar fixed bg-gray-300 h-screen top-0 right-0 w-1/2 transition-all ease-in-out duration-300":"fixed right-[-1000px]"}>
                <ul className='flex flex-col px-4 mt-10 gap-3 h-full'>
                    <li className='flex items-center py-2 gap-3'><MdFavorite/>Favorites</li>
                    <li className='flex items-center py-2 gap-3'><TbTruckDelivery/> Orders</li>
                    <li className='flex items-center py-2 gap-3'><FaWallet/>Wallet</li>
                    <li className='flex items-center py-2 gap-3'><MdHelp/> Help</li>
                    <li className='flex items-center py-2 gap-3'><AiFillTag/>Promotions</li>
                    <li className='flex items-center py-2 gap-3'><BsFillSaveFill/>Best Ones</li>
                    <li className='flex items-center py-2 gap-3'><FaUserFriends/>Invite Friends</li>
                    <div className='flex-col w-full items-center h-fit justify-center gap-2 sm:hidden'>
                        <input type="text" placeholder='Search foods...' className='bg-transparent outline-none w-full border-b-2 border-black' />
                        <AiOutlineSearch className='bg-gray-700 text-white w-full mt-1 h-8 py-2'/>
                    </div>
                </ul>
            </nav>
        </div>
    </section>
    
    </>
}

export default Nav;