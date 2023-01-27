import React from "react";

import { events } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { DotLeft, Landing, Ellipse, EventCard} from "../components";

const Events = () => {
  return (
    <>
      <Landing />
      <div className="events">
        <div className="container">
          <div className="events-content">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              initialSlide={1}
              centeredSlides={false}
              autoplay={{
                enabled: true,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              slideToClickedSlide={true}
              spaceBetween={10}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                992: {
                  slidesPerView: 2,
                },
              }}>
              <div className="event-swiper">
                {events.map((event) => (
                  <SwiperSlide key={event.header}>
                    <EventCard card={event} />
                  </SwiperSlide>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>

        <DotLeft />
        <Ellipse />
      </div>
    </>
  );
};

export default Events;
