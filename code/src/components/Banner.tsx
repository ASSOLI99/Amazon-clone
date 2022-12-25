import { Navigation, Lazy, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import Image from "next/image";
function Banner() {
  return (
    <div className="flex justify-center md:px-32 lg:px-40">
      <Swiper
        modules={[Navigation, Lazy, Autoplay]}
        navigation={true}
        lazy={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="flex justify-center relative">
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-10 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test photo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center relative">
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-10 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test photo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center relative">
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-10 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/3858268/pexels-photo-3858268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test photo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center relative">
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-10 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test photo"
              />
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Banner;
