function Get() {
  return (
    <div
      className="
        bg-gradient-to-br from-[#2ECC71] to-[#27AE60]
        rounded-2xl sm:rounded-3xl
        px-4 sm:px-6 lg:px-8
        py-5 sm:py-6
        m-3 sm:m-4
        space-y-3 sm:space-y-4
        mb-6 sm:mb-8
        text-white
      "
    >
    
      <p className="text-xs sm:text-sm font-semibold tracking-wide opacity-90">
        WHAT YOU&apos;LL GET
      </p>

      
      <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
        Friendly quiz with instant feedback
      </p>

      
      <ul className="space-y-3 sm:space-y-4 list-disc list-inside text-sm sm:text-base">
        <li>Bite-sized explanations for every answer</li>
        <li>Tone automatically matches the learner profile</li>
      </ul>
    </div>
  );
}

export default Get;
