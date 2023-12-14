import Sidebar from './components/Sidebar';
import Background from './components/Background';

export default function Home() {
  return (
    <>
    <Background/>
    <div className='flex flex-col xl:flex-row justify-between'>
      <Sidebar/>
      <div className='pt-4 xl:pt-0 w-full xl:w-2/6 flex flex-col-reverse gap-2 items-center md:items-start xl:items-center pl-4 xl:pl-0 xl:flex-col justify-center'>
        
        <div className='flex flex-col text-center w-96 p-1 items-center justify-end gap-4 bg-[#171717d8] rounded-md'>
          <img src="../../../enkra.jpg" className='rounded-md' alt="" />
          <div className='absolute p-2 font-notoSansJP bg-[#171717d8] text-white w-[23.5rem] rounded-b-md'>
            Enggar Kratom - Vite.js - Tailwindcss
          </div>
        </div>

        <div className='flex flex-col text-center  w-96 p-4 gap-3 bg-[#171717d8] rounded-md text-white'>
          <div className='gap-2 pb-2 border-b-2 w-full flex flex-col items-center'>
            <img src="../../../foto.png" className='rounded-full w-28 opacity-100' alt="" />
            <h1>Oliver Dillon</h1>
            <p>Student</p>
          </div>
          <div className='pb-2 border-b-2'>
            <p>Living in Pontianak, Indonesia. Currently as student in State Polytechnic of Pontianak. Hoping to further of my career as fullstack developer.</p>
          </div>
          <div className='flex flex-row items-end text-sm font-extralight justify-between text-blue-500 underline underline-offset-2'>
            <a href="https://github.com/oliv-e/">Github <span className='icon-[fluent-mdl2--go] w-2 h-2'></span></a>
            <a href="mailto:oliversmk7rpl@gmail.com">Text Me</a>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
