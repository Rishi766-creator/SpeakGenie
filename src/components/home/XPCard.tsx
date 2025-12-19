import ProgressBar from "../common/ProgressBar";
import { Sparkles } from "lucide-react";

function XPCard(){
    return(
        <div className="flex flex-col rounded-4xl bg-white/10 backdrop-blur-xl text-white m-8 font-semibold border border-white/20 shadow=[0_6px_18px_rgba(0,0,0,0.08)]">
            
            <div className="flex  items-center justify-evenly pt-5 ">            
            <div className="w-14 h-14 rounded-full font-semibold bg-white/20 flex items-center justify-center shadow-[0_0_12px_rgba(110,231,183,0.5)] border border-white/20">L3</div>
            <div className="flex flex-col w-[80%] space-y-1 mb-5">
                <div className="font-semibold text-lg">XP PROGRESS</div>
                <div><ProgressBar value={60} fillColor="bg-white" /></div>
                <div className="flex justify-between items-center"><div>42/100 XP</div><div>Next:L4</div></div>
            </div>
            </div>
            <div className="flex justify-between font-semibold mt-3 pb-2 items-center ">
                <div className="bg-white/20 rounded-xl px-3 py-3 ml-14 "><Sparkles className="w-6 h-6 text-white" /></div>
                <div>242XP</div>
                <div className="mr-14 ">. . .</div>
            </div>
        </div>

    

    )

}
export default XPCard;