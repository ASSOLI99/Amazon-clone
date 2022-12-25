import { Navigation, Lazy, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import Image from "next/image";
function Banner() {
  return (
    <div className="flex justify-center md:px-32 lg:px-56">
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
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test photo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center relative">
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/14814115/pexels-photo-14814115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test photo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center relative">
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/14783910/pexels-photo-14783910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test photo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center relative">
            <div className="h-20 w-full bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0 absolute "></div>
            <div className="w-full  relative h-72 sm:h-96">
              <Image
                fill
                src="https://images.pexels.com/photos/14825235/pexels-photo-14825235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
