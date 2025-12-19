function Topic() {
  const text1 = ["My Best Friend", "Solar System", "Animals & Birds"];
  const text2 = ["Cricket Basics", "Healthy Habits", "School Picnic"];

  return (
    <div
      className="
        bg-white rounded-2xl sm:rounded-3xl
        shadow-[0_16px_40px_rgba(0,0,0,0.12)]
        px-4 sm:px-6 lg:px-8
        py-4
        m-3 sm:m-4
        space-y-4
      "
    >
      
      <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-wide">
        STEP 1
      </p>

      
      <p className="font-semibold text-lg sm:text-xl">
        Choose a topic
      </p>

    
      <input
        type="text"
        placeholder='e.g. "My school day" or "Planets in space"'
        className="
          w-full sm:w-[90%] lg:w-[80%]
          p-3
          rounded-xl
          bg-gray-50
          border border-gray-300
          text-sm sm:text-base
          focus:outline-none focus:ring-2 focus:ring-green-400
        "
      />


      <div className="flex flex-col sm:flex-row gap-3">
        {[text1, text2].map((group, idx) => (
          <div key={idx} className="flex flex-wrap gap-2">
            {group.map((x) => (
              <span
                key={x}
                className="
                  text-gray-700 font-semibold
                  bg-gray-100
                  rounded-full
                  px-3 py-1.5
                  text-xs sm:text-sm
                  cursor-pointer
                  hover:bg-gray-200
                "
              >
                {x}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topic;
