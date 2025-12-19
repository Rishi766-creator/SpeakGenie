import { Bot, ArrowRight } from "lucide-react";

function AIPracticeCarousel() {
  const images = [
    { id: 1, link: "/shinchan.png", text: "Talk with Shinchan" },
    { id: 2, link: "/spider_man.jpeg", text: "Talk with Spider Man" },
    { id: 3, link: "/doreamon.jpeg", text: "Talk with Doreamon" },
    { id: 4, link: "/dora.jpeg", text: "Talk with Dora" },
    { id: 5, link: "/pooh.png", text: "Talk with Pooh" },
    { id: 6, link: "/bheem.jpeg", text: "Talk with Bheem" },
  ];

  return (
    <section className="w-full ">

      
      <div className="flex items-center px-4 py-3 sm:px-6 lg:px-10 mb-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12
          rounded-full bg-[#FFF4E6]
          flex items-center justify-center ">
          <Bot className="text-pink-400" size={24} />
        </div>

        <h2 className="ml-3 font-semibold
          text-xl sm:text-3xl lg:text-4xl">
          Practice with AI
        </h2>

        <button className="ml-auto flex items-center
          text-green-500 font-semibold
          text-sm sm:text-base">
          Show all
          <ArrowRight className="ml-1" size={18} />
        </button>
      </div>

      
      <div className="flex overflow-x-auto scrollbar-hide
        gap-4 sm:gap-6 lg:gap-10
        px-4 sm:px-6 lg:px-10">

        {images.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0
              min-w-[120px] sm:min-w-[150px] lg:min-w-[180px]
              flex flex-col items-center"
          >
            <img
              src={item.link}
              alt={item.text}
              className="rounded-xl object-cover
                h-36 w-28
                sm:h-48 sm:w-36
                lg:h-60 lg:w-44"
            />

            <p className="mt-2 text-center font-semibold
              text-xs sm:text-sm lg:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AIPracticeCarousel;
