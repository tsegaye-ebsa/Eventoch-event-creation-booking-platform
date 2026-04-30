"use client"; 
import {
    Carousel,
    CarouselContent,
    
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function Main() {
    return (
    <div>  
         <div className="flex justify-between items-end p-5 my-5 w-full   border-1 border-gray-200" >
            <h1 className="text-2xl font-bold text-gray-800  font-serif">Get your merch!</h1>
            <hr className=" border-1 border-gray-400 "/>
            <h1 className=" text-md font-bold text-gray-800  font-serif">Show more </h1>
         </div>

       <Carousel className="w-full border-2 border-black-300 ">
       <CarouselContent className="flex flex-row w-full  h-100  border-b-2  ">
        <div className="flex">
              <div className="w-80 h-full border-2"></div>
           
         <div className="w-80 h-full border-2"></div>
         <div className="w-80 h-full border-2"></div>
         <div className="w-80 h-full border-2"></div>
         </div>
         <CarouselPrevious />
         <CarouselNext />
       </CarouselContent>
      
     </Carousel>
     </div>
    );
}