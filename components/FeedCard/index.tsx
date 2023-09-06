import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

const FeedCard: React.FC = ()=>{
    return(
        <div className="border border-gray-600 border-l-0 border-r-0 border-b-0 p-4 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12">
                <div className="col-span-1 ">
                    <Image src="https://avatars.githubusercontent.com/u/57212963?v=4" alt="user-image" height={50} width={50}/>
                </div>
                <div className="col-span-11 pl-2 ">
                    <p>If you thought you needed software like After effects then do check out my UI animation series on Instagram. Grab the file for free and practice yourself. </p>
                    <div className="flex justify-between mt-5 text-xl items-center p-2 w-[80%]">
                        <div>
                            <BiMessageRounded/>
                        </div>
                        <div>
                            <FaRetweet/>
                        </div>
                        <div>
                            <AiOutlineHeart/>
                        </div>
                        <div>
                            <FiUpload/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default FeedCard;