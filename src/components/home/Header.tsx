import { Gem, Moon } from "lucide-react";
import XPCard from "./XPCard";

function Header() {
  return (
    <div
      className="bg-gradient-to-b from-[#2ECC71] to-[#27AE60] 
        rounded-b-3xl sm:rounded-b-4xl p-4 sm:p-5 lg:p-6
        shadow-[0_18px_35px_rgba(16,185,129,0.3)]"
    >
    
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-4 sm:pt-8 px-2 sm:px-5 text-white gap-4 sm:gap-0">
        
    
        <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto">
          <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 overflow-hidden flex items-center justify-center">
            <img src="/boy.jpeg" alt="boy" className="object-cover w-full h-full" />
          </div>
          <div>
            <p className="text-xs sm:text-sm lg:text-base">Good Night</p>
            <p className="text-xl sm:text-3xl lg:text-4xl font-semibold">Lorenzo</p>
          </div>
        </div>

    
        <div className="flex items-center space-x-3 sm:space-x-6 mt-3 sm:mt-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Moon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
          </div>
          <div className="rounded-lg px-2 sm:px-3 py-1 flex items-center font-semibold bg-black/14 text-sm sm:text-base">
            <Gem size={16} className="mr-1 text-yellow-500" /> 30
          </div>
          <div className="text-white bg-gradient-to-b from-[#FF9A7A] to-[#FF7043] rounded-lg px-2 sm:px-3 py-1 text-sm sm:text-base font-semibold">
            <button>PRO</button>
          </div>
        </div>
      </div>

      
      <div className="mt-4 sm:mt-6">
        <XPCard />
      </div>
    </div>
  );
}

export default Header;
