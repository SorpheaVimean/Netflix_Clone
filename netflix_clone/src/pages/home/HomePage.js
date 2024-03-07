import React from "react";
import movie1 from "../../image/pageImage/movie1.png";
import movie2 from "../../image/pageImage/movie2.jpg";
import movie3 from "../../image/pageImage/movie3.jpg";
import movie4 from "../../image/pageImage/movie4.jpg";
import logo from "../../image/pageImage/logo.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaPlay } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
// or only core styles
import "@splidejs/react-splide/css/core";

const HomePage = () => {
  const movie = [
    {
      id: 1,
      categories: "SHOW",
      title: "MAID",
      image: movie1,
    },
    {
      id: 2,
      categories: "MOVIE",
      title: "NO WHERE",
      image: movie2,
    },
    {
      id: 3,
      categories: "MOVIE",
      title: "RABEL MOON",
      image: movie3,
    },
    {
      id: 4,
      categories: "MOVIE",
      title: "THE GRAY MAN",
      image: movie4,
    },
  ];
  const smallMovie = [
    {
      id: 1,
      image: movie1,
    },
    {
      id: 2,
      image: movie2,
    },
    {
      id: 3,
      image: movie3,
    },
    {
      id: 4,
      image: movie4,
    },
    {
      id: 5,
      image: movie1,
    },
    {
      id: 6,
      image: movie2,
    },
    {
      id: 7,
      image: movie3,
    },
    {
      id: 8,
      image: movie4,
    },
    
  ];
  return (
    <div className="bg-NBlack">
      <div className="relative">
        <Splide
          options={{
            rewind: true,
            arrows: false,
            height: 900,
            type: "fade",
            autoplay: true, // Enable autoplay
            pauseOnHover: true, // Prevent pausing on hover
            interval: 5000, // Set autoplay interval in milliseconds
            drag: false, // Disable dragging
            keyboard: false, // Disable keyboard navigation
            dragScroll: false, // Disable drag scrolling
            flickScroll: false, // Disable flick scrolling
            // arrowPath: true,
          }}
          aria-label="My Favorite Images"
        >
          {movie &&
            movie.map((mo, index) => {
              return (
                <SplideSlide
                  key={index}
                  className="bg-no-repeat bg-cover bg-center h-full w-full"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 95%), url(${mo.image})`,
                    width: "100%",
                    height: "500px",
                  }}
                >
                  <div className="flex flex-col justify-center items-start text-white absolute bottom-[25%] left-20">
                    <div className="flex justify-center items-center gap-5 cursor-default">
                      <img src={logo} className="w-7" alt="Image2" />
                      <p>{mo.categories}</p>
                    </div>
                    <p className="text-[200px] flex justify-start items-start cursor-default">
                      {mo.title}
                    </p>
                    <div className="flex justify-center items-center gap-10">
                      <button className="flex justify-center items-center gap-5 bg-white text-black font-black rounded-md w-36 p-5 hover:bg-brown-50">
                        <FaPlay className="" />
                        <p>PLAY</p>
                      </button>
                      <button className="flex justify-center items-center gap-5 bg-white bg-opacity-30 hover:bg-opacity-10 font-black rounded-md w-46 p-4 hover:bg-brown-50">
                        <PiWarningCircleBold className="text-4xl" />
                        <p>More Info</p>
                      </button>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
        <div className="absolute bottom-[-40px]">
          <div className="text-white">Most Populaer</div>
          <Splide
         
             options={{
              label:"my ggggdfgdfg",
              rewind: true,
              arrows: false,
              snap: true,
              gap: "1em",
              drag: true,
              perPage: 4,
              useScroll: true,
              scroll: "number",
              // flickMaxPages: 4,
              // arrowPath: true,
            }}
          >
          {smallMovie &&
            smallMovie.map((mo, index) => {
              return (
                <SplideSlide
                  key={index}
                  className=""
                >
                  <img src={mo.image} className="w-[300px] hover:scale-125 object-fill" alt=""/>
                </SplideSlide>
                );
          })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
