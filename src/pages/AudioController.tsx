import { ChevronDown, File, Bell, Heart, Volume2, Repeat, SkipBack, Play, SkipForward, Shuffle, Gauge } from 'lucide-react';
import ProgressBar from '../components/common/ProgressBar';

function AudioController() {
  return (
    <div className="w-full bg-[#F5F8FF] min-h-screen">

      
      <div className='flex justify-between items-center p-4 sm:px-6 md:px-8 lg:px-12'>
        <ChevronDown className="text-gray-700" />
        <p className="text-slate-800 text-md sm:text-lg md:text-xl font-semibold">NOW PLAYING</p>
        <div className="flex space-x-4 sm:space-x-5 md:space-x-6 items-center">
          <div className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-white flex justify-center items-center">
            <File size="20px" className="text-gray-700"/>
          </div>
          <div className="relative bg-gradient-to-r from-[#2ECC71] to-[#27AE60] h-8 w-12 sm:h-9 sm:w-14 md:h-10 md:w-16 rounded-full flex justify-center items-center">
            <Bell size="20px" className="text-gray-700"/>
            <span className="absolute -top-2 -right-1 text-black bg-yellow-500 rounded-full w-5 h-5 flex justify-center items-center text-xs sm:text-sm md:text-sm">7</span>
          </div>
        </div>
      </div>

      
      <div className="w-full bg-blue-100 px-4 sm:px-6 md:px-8 lg:px-40 py-4 flex flex-col space-y-4">

    
        <div className="w-full bg-white rounded-3xl border-2 border-green-500 p-3">
          <img
            src="/main.jpg"
            alt=""
            className="w-full h-80 sm:h-100 md:h-110 lg:h-130 object-cover rounded-2xl"
          />
        </div>

        
        <div className="flex  sm:flex-row justify-between items-start sm:items-center mt-4">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">The Story of Braveness</p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">An excellent story of Ava and her friends.</p>
          </div>
          <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600 mt-2 sm:mt-0"/>
        </div>

    
        <div className="flex justify-center mt-4">
          <button className="p-3 sm:px-5 md:px-6 lg:px-8 sm:py-3 bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white flex justify-center rounded-2xl font-semibold items-center text-sm sm:text-base md:text-lg lg:text-xl w-[80%]">
            
            <File className="mr-2"/>
            Test Your Understanding
            <span className="ml-3 bg-white/20 rounded-full px-2 py-1 text-xs sm:text-md md:text-lg lg:text-lg ">7 Questions</span>
          </button>
        </div>

      </div>

      
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-4'>
        <ProgressBar value={0} bgColor="bg-gray-300" fillColor="bg-white"/>

        <div className='flex justify-between py-2 font-semibold text-gray-500 text-xs sm:text-sm md:text-base'>
          <p className='text-green-500'>0.00</p>
          <p>2.18</p>
        </div>

        <div className="flex justify-around items-center text-gray-700 py-3">
          <Volume2 size={18} className="sm:size-6 md:size-7 lg:size-9"/>
          <Repeat size={18} className="sm:size-6 md:size-7 lg:size-9"/>
          <SkipBack size={24} className="sm:size-10 md:size-7 lg:size-10"/>
          <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#22C55E] flex justify-center items-center'>
            <Play size={24} className="sm:size-12 md:size-12 lg:size-14 text-white"/>
          </div>
          <SkipForward size={24} className="sm:size-10 md:size-7 lg:size-10"/>
          <Shuffle size={18} className="sm:size-6 md:size-7 lg:size-9"/>
          <Gauge size={18} className="sm:size-6 md:size-7 lg:size-9"/>
        </div>
      </div>
    </div>
  )
}

export default AudioController;
