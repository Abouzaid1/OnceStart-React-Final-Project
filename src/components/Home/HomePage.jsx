import React from 'react'
import { NavLink,Link } from 'react-router-dom'
export default function HomePage() {

  return (
    <>
        <div className='w-full h-[100vh] bg-bg p-5'>
            <div className='flex items-center justify-end gap-6'>
             
              <NavLink to="/login"><button className='p-4 my-9 border-text hover:bg-text hover:text-main font-bold transition-all rounded-lg   border-[1px] border-dashed text-text'> Login </button></NavLink>
            </div> 
            <div>
              <h1 className='md:text-[100px] text-[60px] text-center m-0 p-0 font-extrabold text-text'>Once$tart</h1>
              <h2  className='md:text-[50px] text-[30px] text-center m-0 p-0 text-text '>Features</h2>
              <div className='flex flex-wrap justify-center gap-5 '>
                <div className='text-text my-5 border-[1px] border-border md:w-[20%] w-[80%] text-center p-5 rounded-lg'>
                  <p className='text-[25px] font-semibold mb-5'>individual tasking</p>
                  <p className='text-[18px] font-light'>You will be able to write your individual task and no one will see it</p>
                </div>
                <div className='text-text my-5 border-[1px] border-border md:w-[20%] w-[80%] text-center p-5 rounded-lg'>
                  <p className='text-[25px] font-semibold mb-5'>Group tasking</p>
                  <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit illo, inventore sequi temporibus quasi dolorum itaque voluptate praesentium vel omnis. Quasi, explicabo aliquid dolores assumenda exercitationem facere asperiores autem!</p>
                </div>
                <div className='text-text my-5 border-[1px] border-border md:w-[20%] w-[80%] text-center p-5 rounded-lg'>
                  <p className='text-[25px] font-semibold mb-5'>Secure tasking</p>
                  <p className='text-[18px] font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laborum consequatur cumque placeat necessitatibus repellat tempora dolorum illo, porro pariatur adipisci natus quidem a aut aspernatur veniam consequuntur rem perspiciatis?</p>
                </div>
                <div className='text-text my-5 border-[1px] border-border md:w-[20%] w-[80%] text-center p-5 rounded-lg'>
                  <p className='text-[25px] font-semibold mb-5'>Keep Uptodate</p>
                  <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis optio aliquid ex labore, soluta eius velit maiores consequatur sit, voluptatem quam sunt, in iusto tempore. Veritatis numquam tenetur odio.</p>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
