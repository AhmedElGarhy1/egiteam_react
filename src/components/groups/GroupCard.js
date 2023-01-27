import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { maxHeight } from "../../utils";

const GroupCard = ({
  currentGroupName,
  currentImage,
  group,
  setCurrentImage,
  setCurrentGroupName,
}) => {
  const [iconsHeight, setIconsHeight] = useState(0);
  const [maxCardHeight, setMaxCardHeight] = useState("auto");

  useEffect(() => {
    setTimeout(() => {
      const arrayOfHeights = [...document.querySelectorAll(".text")];
      setMaxCardHeight(maxHeight(arrayOfHeights));
    }, 0);
    window.addEventListener("resize", controleSize);
    controleSize();
  }, []);

  useEffect(() => {
    const arrayOfHeights = [...document.querySelectorAll(".text")];
    setMaxCardHeight(maxHeight(arrayOfHeights));
  }, [maxCardHeight]);

  const handleSlideChange = (core) => {
    const current = [...core.pagination.bullets].find((ele) =>
      ele.classList.contains("swiper-pagination-bullet-active")
    );

    const img = current.getAttribute("data-src");
    const groupName = current.getAttribute("data-groupName");
    setCurrentImage(img);
    setCurrentGroupName(groupName);
  };

  const controleSize = () => {
    if (window.innerWidth <= 767) {
      const iconsHeight = document.querySelector(
        ".groups .swiper-pagination"
      ).clientHeight;
      setIconsHeight(iconsHeight);
    }
    setMaxCardHeight("fit-content");
  };

  return (
    <section style={{ backgroundColor: "hsl(0deg 0% 85% / 20%)" }}>
      <div id="boxes" className="container">
        <div className="carrd card2">
          <div className="Card2">
            <h1
              className="h1"
              style={{ fontFamily: "sans-serif", fontSize: "1.5em" }}>
              {currentGroupName}
            </h1>
            <div className="images">
              <div className="imageBg">
                <img src={currentImage} />
              </div>
            </div>
            <div className="content">
              <Swiper
                style={{ overflow: "visible" }}
                modules={[Pagination]}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  renderBullet: (i, className) => {
                    const { icon, img, title } = group.cards[i];

                    return `<img data-src="${img}" data-groupName="${title}" src="${icon}" class="dot pag-icon ${className}" />`;
                  },
                }}
                onSlideChange={handleSlideChange}
                spaceBetween={50}>
                {group.cards.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div
                      style={{
                        direction: "rtl",
                        marginTop: iconsHeight,
                        height: maxCardHeight,
                      }}
                      className="text">
                      {card.content.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                      {card.roadmap && (
                        <a
                          style={{ margin: "initial" }}
                          target="_blank"
                          href={card.roadmap}
                          className="cta-btn">
                          <i className="fa-solid fa-arrow-right"></i>
                          Roadmap
                        </a>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupCard;
