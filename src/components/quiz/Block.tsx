import { Sparkles } from "lucide-react";

function Block() {
  return (
    <div
      className="
        bg-white rounded-2xl sm:rounded-3xl
        shadow-[0_16px_40px_rgba(0,0,0,0.12)]
        px-4 sm:px-6 lg:px-8
        py-4 sm:py-5
        m-3 sm:m-4
        space-y-3 sm:space-y-4
        mb-6 sm:mb-8
      "
    >
      
      <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-wide">
        LEARN TAB
      </p>

      
      <p className="font-bold text-lg sm:text-xl lg:text-2xl leading-tight">
        Craft a custom quiz
      </p>

      
      <p className="text-sm sm:text-base text-gray-700 max-w-xl">
        Pick a topic, choose difficulty, and we will build four fun questions instantly.
      </p>

    
      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1 text-xs sm:text-sm bg-gray-100 rounded-full px-3 py-1 text-green-500 font-medium">
          <Sparkles size={16} />
          AI Powered
        </span>

        <span className="text-xs sm:text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700 font-medium">
          4 Questions
        </span>

        <span className="text-xs sm:text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700 font-medium">
          Instant Play
        </span>
      </div>
    </div>
  );
}

export default Block;
