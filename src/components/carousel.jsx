import { Carousel } from "@mantine/carousel";

export default function CarouselSlider() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <div>
        <Carousel.Slide className="bg-blue-500">
          {" "}
          {/* Apply Tailwind CSS classes */}
          <div className="text-white text-center">1</div>
        </Carousel.Slide>
      </div>
      <div>
        <Carousel.Slide className="bg-blue-500">
          {" "}
          {/* Apply Tailwind CSS classes */}
          <div className="text-white text-center">1</div>
        </Carousel.Slide>
      </div>
      <div>
        <Carousel.Slide className="bg-blue-500">
          {" "}
          {/* Apply Tailwind CSS classes */}
          <div className="text-white text-center">1</div>
        </Carousel.Slide>
      </div>
    </Carousel>
  );
}
