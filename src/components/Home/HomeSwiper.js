import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { events } from "../../data";
import { Dots } from "../Dots";

const HomeSwiper = () => {
  return (
    <div>
      <div className="box">
        <div className="container">
          <h2 className="main-heading">Our Events</h2>
          <div className="our-events">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              initialSlide={1}
              autoplay={{
                enabled: true,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                // delay: 10000,
              }}
              centeredSlides={false}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              spaceBetween={50}
              className="home-swiper">
              {events.map((event) => (
                <SwiperSlide key={event.header}>
                  <div className="our-events-box">
                    <div className="iamge">
                      <img data-aos="flip-up" src={event.img} alt="" />
                    </div>
                    <div
                      data-aos-duration="1200"
                      data-aos="fade-up-left"
                      className="description">
                      <p>{event.header}</p>
                      <p className="info">
                        <span>
                          <i className="fas fa-light fa-calendar-days"></i>
                          {event.date}
                        </span>
                        <span>
                          <i className="fas fa-light fa-location-dot"></i>
                          {event.location}
                        </span>
                      </p>
                      <p>{`${event.header} ${event.content}`}</p>
                      <a className="cta-btn" href={event.href} target="_blank">
                        see more<i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div
                style={{ marginTop: "15px" }}
                className="swiper-pagination"></div>
            </Swiper>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="swiper-button-prev"></div>
          <div
            style={{ cursor: "pointer" }}
            className="swiper-button-next"></div>
        </div>

        <Dots />
      </div>
    </div>
  );
};

export default HomeSwiper;
