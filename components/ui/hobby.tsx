import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { myHobbies } from "@/data";
import Image from "next/image";
import Header from "../cards/featured/header";
import Tag from "../util/tag";

export default function Hobby() {
  return (
    <div className="h-[550px] sm:h-[650px] md:h-full 2xl:h-[710px] w-full">
      <Header title="Mijn hobby’s" />
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-2xl"
      >
        {myHobbies.map((hobby) => (
          <SwiperSlide key={hobby.id}>
            <div className="relative w-full h-full">
              <Image
                src={hobby.pic}
                alt={hobby.title}
                layout="fill" // Use fill layout to ensure the image covers the container
                objectFit="cover" // Ensures the image covers the container without distortion
                objectPosition="top left" // Adjust position as needed
                className="rounded-2xl"
              />
              <div className="absolute top-[65%] space-y-2">
                <Tag
                  text={hobby.title}
                  className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-2xl"
                />
                {/* <Tag
                  text={hobby.text}
                  className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-blue-400"
                /> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
