import { ArrowLeft } from "lucide-react";
import Block from "../components/quiz/Block";
import Topic from "../components/quiz/Topic";
import Challenge from "../components/quiz/Challenge";
import Get from "../components/quiz/Get";

function Quiz() {
  return (
    <div className="bg-[#F5F8FF] px-4 sm:px-6 lg:px-8 py-4 pb-32">
      
      
      <div className="inline-flex bg-white rounded-full p-2 sm:p-2.5 space-x-1 items-center text-green-500 text-sm sm:text-base">
        <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
        <span>Back</span>
      </div>

      <Block />
      <Topic />
      <Challenge />
      <Get />

    
      <div className="flex justify-center items-center mt-3">
        <button
          className="
            fixed bottom-4
            bg-gray-300
            rounded-2xl
            font-semibold
            text-white
            text-base sm:text-lg
            p-3 sm:p-4
            w-[90%] sm:w-[70%] lg:w-[50%]
        
          "
        >
          Generate Quiz
        </button>
      </div>
    </div>
  );
}

export default Quiz;
