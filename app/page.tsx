import Image from 'next/image'
import React from 'react';
import { BsTwitter } from 'react-icons/bs'
import { LiaBookmarkSolid } from 'react-icons/lia'
import { BiHomeCircle,BiSearch,BiBell,BiEnvelope,BiUser } from 'react-icons/bi'
import FeedCard from '@/components/FeedCard';

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title:"Explore",
    icon:<BiSearch/>
  },
  {
    title:"Notifications",
    icon:<BiBell/>
  },
  {
    title:"Messages",
    icon:<BiEnvelope/>
  },
  {
    title:"Bookmarks",
    icon:<LiaBookmarkSolid/>
  },
  {
    title:"Profile",
    icon:<BiUser/>
  },
]

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        <div className='col-span-3 pt-1 pr-4 '>
          <div className='text-2xl hover:bg-gray-800 h-fit rounded-full ml-4 p-2 w-fit cursor-pointer transition-all'>
            <BsTwitter />
          </div>
          <div className='mt-4 text-l font-semi px-2'>
            <ul>
              {sidebarMenuItems.map((item) => (
              <li className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-2 w-fit cursor-pointer mt-2' >
                <span className='text-xl'>{item.icon}</span>
                <span>{item.title}</span>
              </li> 
              ))}
            </ul>
            <button className='bg-[#1d9bf0] px-3 py-2 rounded-full w-full mt-5'>Post</button>
          </div>
        </div>
        <div className='col-span-6 h-screen overflow-y-scroll no-scrollbar border border-gray-600'>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                
        </div>
        <div className='col-span-3'></div>
      </div>
    </div>
  )
}
