"use client";
import {
  Field,

  
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {   Heart, ItalicIcon,   SearchIcon, ShoppingCart } from "lucide-react";


import Link from "next/link";
export default function Nav() {
  
  
  return (

    <div className="fixed z-50 w-full bg-white shadow-md">
    <div className="flex  px-5 p-2 items-center justify-between  border-b-1">
        <div>
          <h1 className="text-orange-600 text-xl p-2 font-semibold font-serif">Eventዎች</h1>
        </div>
     <div>
<div>
<Field className="w-120 ">  
      <InputGroup className="w-full h-10 border-2 rounded-4xl py-5 ">
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
         
        </InputGroupAddon>
    <div className="flex border-l-2 w-30 rounded-md">
        <InputGroupInput id="inline-start-input" placeholder="Cassino..." />
        <InputGroupAddon align="inline-start">
        <ItalicIcon className="w-4 h-4 text-gray-500" />
        </InputGroupAddon>
        </div>
        <button className="bg-orange-600 rounded-full py-1 px-2 mx-1 "><SearchIcon/></button>
      </InputGroup>
     
     
    </Field>

</div>
     </div>
    <div className="flex items-center space-x-8 ">
    <Link href="/create-event" className="   font-serif">Updates </Link>
    <Link href="/create-event"className="   font-serif">Events </Link>
    <Link href="/create-event" className="  font-serif">Merch </Link>
    <Link href="/create-event" className="  font-serif  "><p>Create Event</p> </Link>
    </div>
    <div className="flex items-center space-x-8">
    <ShoppingCart className="w-6 -h-6" />
    <Heart className="w-6 -h-6"/>
    <button className="border-2 bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-md py-2 px-5" > <Link href="/Signup"  className=" text-white font-serif">Sign up now  </Link></button>
    </div>
     
    </div>
    </div>
    )
}