import { PhoneCall, ArrowRight } from "lucide-react";

function HumanPracticeCarousel() {
  const images = [
    {
      id: 1,
      link: "/animals.jpeg",
      title: "Favorite Animals",
      badge: "Be first!",
      subtitle: "Talk about your favorite animal",
    },
    {
      id: 2,
      link: "/hobbies.jpeg",
      title: "Favorite Hobbies",
      badge: "Be first!",
      subtitle: "Talk about your favorite hobbies",
    },
    {
      id: 3,
      link: "/friends.jpeg",
      title: "Favorite Friends",
      badge: "Be first!",
      subtitle: "Talk about your favorite friends",
    },
    {
      id: 4,
      link: "/school.jpeg",
      title: "Favorite  School",
      badge: "Be first!",
      subtitle: "Talk about your favorite school",
    },
  ];

  return (
    <div className="w-full mb-10">
    
      <div className="flex items-center px-4 py-3 sm:px-6 lg:px-10 mb-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E9E5FF]
          flex items-center justify-center mr-3">
          <PhoneCall size={24} className="text-purple-500" />
        </div>

        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
          Practice with Humans
        </h2>

        <button className="ml-auto flex items-center text-green-500 font-semibold
          text-sm sm:text-base lg:text-lg">
          Show all
          <ArrowRight size={18} className="ml-1 sm:ml-2" />
        </button>
      </div>

      
      <div className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto px-4 sm:px-6 lg:px-10 scrollbar-hide">
        {images.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 rounded-3xl overflow-hidden
              w-[250px] sm:w-[300px] lg:w-[350px] h-[180px] sm:h-[200px] lg:h-[220px]"
          >
            
            <img
              src={item.link}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />

            
            <div className="absolute inset-0 bg-black/30" />

            
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white">
              
              <div>
                {item.badge && (
                  <span className="absolute top-2 right-2 bg-gray-700/80
                    text-white font-semibold text-xs sm:text-sm px-2 py-1
                    rounded-full">
                    {item.badge}
                  </span>
                )}
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base opacity-90 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              
              <button className="bg-white text-green-600 font-semibold
                py-2 sm:py-2.5 lg:py-3 px-3 sm:px-4 rounded-full text-xs sm:text-sm lg:text-base">
                Join & Start Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HumanPracticeCarousel;
