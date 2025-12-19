import { Lightbulb, Sparkles, Target } from "lucide-react";

const levels = [
  {
    id: 1,
    title: "Easy",
    desc: "Short sentences & gentle vocabulary.",
    icon: Lightbulb,
    bg: "bg-green-50",
    border: "border-gray-200",
    titleColor: "text-green-600",
    selected: false,
  },
  {
    id: 2,
    title: "Medium",
    desc: "Everyday situations with detail.",
    icon: Sparkles,
    bg: "bg-orange-50",
    border: "border-green-400",
    titleColor: "text-orange-500",
    selected: true,
  },
  {
    id: 3,
    title: "Hard",
    desc: "Longer thinking and tricky choices.",
    icon: Target,
    bg: "bg-purple-50",
    border: "border-gray-200",
    titleColor: "text-purple-600",
    selected: false,
  },
];

function Challenge() {
  return (
    <div
      className="
        bg-white rounded-2xl sm:rounded-3xl
        shadow-[0_16px_40px_rgba(0,0,0,0.12)]
        px-4 sm:px-6 lg:px-8
        py-4
        m-3 sm:m-4
        space-y-4 sm:space-y-5
      "
    >
    
      <p className="text-lg sm:text-xl lg:text-2xl font-bold">
        Pick a challenge level
      </p>


      {levels.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`
              flex items-start justify-between gap-4
              px-4 sm:px-6
              py-4
              rounded-xl sm:rounded-2xl
              border ${item.border}
              ${item.bg}
            `}
          >
            
            <div className="space-y-1 sm:space-y-2">
              <p className={`${item.titleColor} text-sm sm:text-base font-semibold`}>
                {item.title}
              </p>

              <p className="text-gray-600 text-sm sm:text-base max-w-md">
                {item.desc}
              </p>

              {item.selected && (
                <span className="inline-block text-xs sm:text-sm text-green-600 bg-white px-3 py-1 rounded-full font-semibold">
                  Selected
                </span>
              )}
            </div>

            
            <Icon
              className={`${item.titleColor} shrink-0`}
              size={20}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Challenge;
