import { Home, Trophy, Phone, User } from "lucide-react";

function BottomNav() {
  const navItems = [
    { label: "Home", icon: Home, text: "Home", active: true },
    { label: "Trophy", icon: Trophy, text: "Learn" },
    { label: "Call", icon: Phone, text: "Call" },
    { label: "Profile", icon: User, text: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full flex justify-around py-2 sm:py-3 font-semibold bg-white">
      {navItems.map(({ label, icon: Icon, text, active }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center text-xs sm:text-sm"
        >
          <Icon
            size={28}
            className={
              active
                ? "fill-green-200 text-green-500"
                : "fill-gray-200 text-gray-500 mb-1"
            }
          />
          <p className={active ? "text-green-500" : "text-gray-500"}>
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BottomNav;
