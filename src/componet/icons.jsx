"use client";

import { Music, Palette, PartyPopper, Trophy, UtensilsCrossed } from 'lucide-react'; // Example icon

export default function IconCard() {
  return (
    <div>
    <div className='flex flex-row justify-around '>
    <div>
    <div className="flex flex-col items-center justify-center w-32 h-32 
                    bg-white/80 backdrop-blur-sm 
                    rounded-md border border-orange-100 
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] 
                    transition-transform hover:scale-105 cursor-pointer ">
      
      {/* The Icon with a custom drop-shadow for the glow */}
      <div className="text-black-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
        <Palette size={32} strokeWidth={1.5} />
      </div>

      {/* The Label */}
     
    </div>
    
    </div>
    
    <div>
    <div className="flex flex-col items-center justify-center w-32 h-32 
                    bg-white/80 backdrop-blur-sm 
                    rounded-md border border-amber-100 
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] 
                    transition-transform hover:scale-105 cursor-pointer ">
      
      {/* The Icon with a custom drop-shadow for the glow */}
      <div className="text-black-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
        <Music size={32} strokeWidth={1.5} />
      </div>

      {/* The Label */}
     
    </div>
    </div>
    <div>
    <div className="flex flex-col items-center justify-center w-32 h-32 
                    bg-white/80 backdrop-blur-sm 
                    rounded-sm border border-amber-100 
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] 
                    transition-transform hover:scale-105 cursor-pointer ">
      
      {/* The Icon with a custom drop-shadow for the glow */}
      <div className="text-black-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
        <UtensilsCrossed size={32} strokeWidth={1.5} />
      </div>

      {/* The Label */}
     
    </div>
    </div>
    <div>
    <div className="flex flex-col items-center justify-center w-32 h-32 
                    bg-white/80 backdrop-blur-sm 
                    rounded-sm border border-amber-100 
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] 
                    transition-transform hover:scale-105 cursor-pointer ">
      
      {/* The Icon with a custom drop-shadow for the glow */}
      <div className="text-black-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
        <Trophy size={32} strokeWidth={1.5} />
      </div>

      {/* The Label */}
     
    </div>
    </div>
    <div>
    <div className="flex flex-col items-center justify-center w-32 h-32 
                    bg-white/80 backdrop-blur-sm 
                    rounded-sm border border-amber-100 
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] 
                    transition-transform hover:scale-105 cursor-pointer ">
      
      {/* The Icon with a custom drop-shadow for the glow */}
      <div className="text-black-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
        <PartyPopper size={32} strokeWidth={1.5} />
      </div>

      {/* The Label */}
     
    </div>
    </div>
    </div>
    <div className='flex flex-row justify-around mt-4 text-md font-medium text-gray-700'>
     <p>Art</p>
     <p>Music</p>
        <p>Food</p>
        <p>Sports</p>
        <p>Party</p>
    </div>
  </div>
  );
}