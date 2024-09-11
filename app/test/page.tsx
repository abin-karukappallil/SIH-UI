"use client"
import React from 'react'
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
 
const photoUrl = 'https://cdn.discordapp.com/attachments/972957443753652246/1280277181108326460/homecr.png?ex=66e20a8a&is=66e0b90a&hm=62a8857d35fdbab0f26567a25b227ab09448061dde0f6e5bdba01995a46fdf9c&';
function page() {
  return (
    <div>
        <h3 className='score mt-48 text-4xl font-extrabold'>
             <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-slate-800 dark:bg-zinc-900">
        <Image
          src={photoUrl}
          alt="profilePic"
          height="400"
          width="400"
          className="object-contain"
        />
  <div className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
    <h1 className="uppercase text-4xl">geuniity:67%</h1>
    <h2>Name: Abin</h2>
    <img src={"https://cdn.discordapp.com/attachments/972957443753652246/1280277181108326460/homecr.png?ex=66e20a8a&is=66e0b90a&hm=62a8857d35fdbab0f26567a25b227ab09448061dde0f6e5bdba01995a46fdf9c&"} alt="Profile Picture" className="w-16 h-16 rounded-full" />
    <h3>Followers: 33</h3>
    <h3>Following: 7</h3>
    <h3>Posts: 2</h3>
    <h3>Bio: bii</h3>
  </div>
 
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
         
        </div>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
          </h3>
    </div>
  )
}

export default page