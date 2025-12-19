import { Video, PhoneCall, BookOpen, Bot } from "lucide-react";

function ActionGrid() {
  const actions = [
    {
      label: ["Video", "Learning"],
      icon: Video,
      bgColor: "#DCE7FF",
    },
    {
      label: ["Peer Calls"],
      icon: PhoneCall,
      bgColor: "#D9F2E6",
    },
    {
      label: ["Stories"],
      icon: BookOpen,
      bgColor: "#FFE6CC",
    },
    {
      label: ["AI Calls"],
      icon: Bot,
      bgColor: "#FFDADA",
    },
  ];

  return (
    <div className="flex flex-wrap justify-around items-center mt-10 gap-4 sm:gap-6 lg:gap-10 font-semibold text-slate-800 text-sm sm:text-base lg:text-lg mb-10">
      {actions.map(({ label, icon: Icon, bgColor }, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center">
        
          <div className="w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 rounded-full bg-white
            flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.08)] mb-2">
            
            
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                backgroundColor: bgColor,
                width: "75%",
                height: "75%",
              }}
            >
              <Icon
                strokeWidth={2.5}
                className="text-blue-600"
                style={{
                  width: "60%",
                  height: "60%",
                }}
              />
            </div>
          </div>

          
          {label.map((text, i) => (
            <p key={i} className="text-center">
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ActionGrid;
