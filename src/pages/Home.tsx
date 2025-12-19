import ActionGrid from '../components/home/ActionGrid';
import Header from '../components/home/Header';
import StoryCarousel from '../components/home/StoryCarousel';
import HumanPracticeCarousel from '../components/home/HumanPracticeCarousel';
import AIPracticeCarousel from '../components/home/AIPracticeCarousel';
import BottomNav from '../components/common/BottomNav';

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#DFF3E9] to-[#EEF3F8]">
      
      
      <div className="flex-1 overflow-y-auto pb-24 sm:pb-28 lg:pb-32">
        <Header />
        <ActionGrid />
        <StoryCarousel />
        <HumanPracticeCarousel />
        <AIPracticeCarousel />
      </div>

      
      <BottomNav />
    </div>
  );
}

export default Home;
