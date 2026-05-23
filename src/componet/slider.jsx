"use client";
import Link from "next/link"

import Icon from "@/componet/icons"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"



export default function Home() {
    

    return (
      <div>
        <Carousel className="w-full">
          <CarouselContent className="w-full h-100 border-b-2">
            <CarouselItem>
            <img src="/38c09a82-2c6e-4547-a9f0-4ce44a3c6c12.JPG" alt="" className="w-full h-full  object-cover " />
         
            </CarouselItem>
            <CarouselItem>      
              <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-orange-100 to-amber-100">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Eventoch</h1>
                <p className="text-lg text-gray-600 mb-8">Discover and create amazing events with us!</p>
                <Link href="/Signup">
                  <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                    Get Started
                  </button>
                </Link>
              </div>
              <Icon />
              </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselPrevious className="w-15 h-15 top-50 mx-20" />
            <CarouselNext className="w-15 h-15 top-50 mx-10" />
          </CarouselContent>
        </Carousel>
      </div>
    )
}
