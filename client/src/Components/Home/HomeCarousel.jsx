import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const slides = [
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/l1GWYR-J4UvmK7849F472A/1250x703.jpg",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1250x703.jpg",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/1250x703.jpg",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/1250x703.jpg",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/1250x703.jpg",
  },
  {
    img: "https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/1250x703.jpg",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/1250x703.jpg",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/1250x703.jpg",
  },
  {
    img: "https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/1250x703.jpg",
  },
  {
    img: "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/1250x703.jpg",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/RcgPZ5VHFSmr43fk1fjuMw/1250x703.jpg",
  },
  {
    img: "https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/1250x703.jpg",
  },
];
const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <>
      <Flex
        w="full"
        mt={"1%"}
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden">
          <Flex pos="relative" h="700px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeCarousel;
