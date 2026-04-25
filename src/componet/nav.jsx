"use client";
import {
  Field,

  
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {   LocateIcon, SearchIcon } from "lucide-react";

import Link from "next/link";
export default function Nav() {
    return (

    <>
    <div className="flex px-10  items-center justify-around p-1  border-b-1">
        <div>
          <h1 className="text-orange-600 text-3xl font-semibold font-serif">Eventዎች</h1>
        </div>
     <div>
<div>
<Field className="w-120 p-2">  
      <InputGroup className="w-full h-10 border-2 rounded-4xl  ">
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
         
        </InputGroupAddon>
    <div className="flex border-l-2 w-30 rounded-md">
        <InputGroupInput id="inline-start-input" placeholder="Cassino..." />
        <InputGroupAddon align="inline-start">
        <LocateIcon/>
        </InputGroupAddon>
        </div>
        <button className="bg-orange-600 rounded-full py-1 px-2 mx-1 "><SearchIcon/></button>
      </InputGroup>
     
     
    </Field>

</div>
     </div>
    
    <Link href="/create-event" className="   font-serif">Updates </Link>
    <Link href="/create-event"className="   font-serif">Events </Link>
    <Link href="/create-event" className="  font-serif">Create Event </Link>
    <Link href="/create-event" className="  font-serif">Merch </Link>
    <Link href="/create-event"className="  font-serif">My Events </Link>
  
  <div>
    <button > <Link href="/create-event"className="  font-serif">Sign in </Link></button>
  </div>
     
    </div>
    </>
    )
}