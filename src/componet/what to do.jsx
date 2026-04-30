"use client"; 
import {
    Carousel,
    CarouselContent,
    
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export default function Main() {
    return (
    <div className="mt-5 p-5 bg-gray-100">  
         <div className="flex justify-between items-end p-5  w-full   border-b-1 border-gray-200" >
            <h1 className="text-2xl font-bold text-gray-800  font-serif">What to in </h1>
            <hr className=" border-1 border-gray-400 "/>
            <h1 className=" text-md font-bold text-gray-800  font-serif">Show more </h1>
         </div>
         <Carousel className="w-full mb-5   ">
       <CarouselContent className="flex flex-row w-full  h-70  border-b-2  "> 
        <div className="flex space-x-5">
              <div className="w-80 h-full border-2 rounded-t-4xl"></div>
           
         <div className="w-80 h-full border-2 rounded-t-4xl"></div>
         <div className="w-80 h-full border-2 rounded-t-4xl"></div>
         <div className="w-80 h-full border-2 rounded-t-4xl"></div>
         </div>
         <CarouselPrevious />
         <CarouselNext />
       </CarouselContent>
      
     </Carousel>
     </div>
    );
}