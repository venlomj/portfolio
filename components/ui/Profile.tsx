import Image from "next/image";
import React from "react";
import MyPicture from "@/public/assets/images/profile/campnou.jpg";

export default function Profile() {
  return (
    <a
      href="https://venlomj.vercel.app/"
      rel="noopener noreferrer"
      className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground"
    >
      <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
        <Image
          src={MyPicture}
          alt="venlomj"
          className="w-[95px] h-[95px] bottom-[0.2vw] border-blue-cosmos rounded-full object-cover"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
      </div>
      <div className="text-3xl font-medium">MURREL VENLO</div>
    </a>
  );
}
