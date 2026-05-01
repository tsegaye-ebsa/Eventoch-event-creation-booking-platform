"use client";
import { useActionState } from "react";
import { submitEvent } from "@/app/action";

export default function CreateEvent() {
    return (
        <div  className="flex items-center justify-center h-screen  from-orange-100 to-amber-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Create an Event</h2>
                    <form action={submitEvent} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Event Name</label>
                            <input type="text" id="name" name="title" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date</label>
                            <input type="text" id="date" name="date" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Event Location</label>
                            <input type="text" id="location" name="location" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                        </div>
                        <button type="submit" className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">Create Event</button>
                    </form>
                </div>
            </div>)
 }