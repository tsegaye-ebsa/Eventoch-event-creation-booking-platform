"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"



export default function Home() {
    const Event =[{img:"/public/OPS34N0.jpg"}]

    return (
<div>
<Carousel className="w-330 my-5 mx-10 border-2 rounded-5xl ">
  <CarouselContent className=" w-330 h-100 border-2 rounded-5xl   ">
    <CarouselItem><img src="/OPS34N0.jpg" alt="" className="w-330 object-cover " /></CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselPrevious />
    <CarouselNext />
  </CarouselContent>
 
</Carousel>
     </div>
    )
}
