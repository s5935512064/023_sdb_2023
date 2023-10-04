"use client";

import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const slide_image_hero = [
  {
    id: 0,
    src: "/assets/cover_slide/bannerslide-SLD0003-deskop.webp",
    alt: "bg_01",
  },
  {
    id: 1,
    src: "/assets/cover_slide/bannerslide-SLD0007-deskop.webp",
    alt: "bg_02",
  },
  { id: 2, src: "/assets/cover_slide/DSCF1512-Edit-3.webp", alt: "bg_03" },
  { id: 3, src: "/assets/cover_slide/DSCF3678.webp", alt: "bg_04" },
  { id: 4, src: "/assets/cover_slide/DSCF8990-Edit-114.webp", alt: "bg_05" },
  {
    id: 5,
    src: "/assets/cover_slide/DSCF9186-Pano-Edit-161.webp",
    alt: "bg_06",
  },
];

const HomeHero: FC<Props> = (): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        effect="fade"
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        speed={1500}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full relative"
      >
        {slide_image_hero.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full relative">
              <div className="absolute w-full h-full bg-black/30 !z-50" />
              <Image
                width="0"
                height="0"
                sizes="100vw"
                priority={true}
                unoptimized={true}
                src={item.src}
                alt={item.alt}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeHero;
