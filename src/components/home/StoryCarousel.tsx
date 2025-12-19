import { Sparkles, ArrowRight } from "lucide-react";

function StoryCarousel() {
  const images = [
    { id: 1, link: "/right_path.jpeg", text: "Charlotte's Web" },
    { id: 2, link: "/girl.jpeg", text: "Bedtime Stories" },
    { id: 3, link: "/fountain.jpeg", text: "Great Stories" },
    { id: 4, link: "/animal.jpeg", text: "Animal Stories" },
    { id: 5, link: "/story5.jpeg", text: "All time Stories" },
    { id: 6, link: "/story4.jpeg", text: "All Around Me" },
  ];

  return (
    <div className="w-full mb-10">
      
      <div className="flex items-center px-4 py-3 sm:px-6 lg:px-10 mb-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#DCE7FF] flex items-center justify-center mr-3">
          <Sparkles size={24} className="text-green-500" />
        </div>

        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
          Audio Stories
        </h2>

        <button className="ml-auto flex items-center text-green-500 font-semibold text-sm sm:text-base lg:text-lg">
          Show all
          <ArrowRight size={18} className="ml-1 sm:ml-2" />
        </button>
      </div>

      
      <div className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 scrollbar-hide">
        {images.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 flex flex-col items-center justify-start 
              overflow-hidden rounded-2xl
              w-[120px] sm:w-[160px] lg:w-[200px]"
          >
            <img
              src={item.link}
              alt={item.text}
              className="w-full h-36 sm:h-48 lg:h-56 object-cover rounded-2xl"
            />
            <p className="text-slate-800 font-semibold text-xs sm:text-sm lg:text-base mt-2 text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryCarousel;
